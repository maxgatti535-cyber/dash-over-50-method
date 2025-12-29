import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getLocalStorageItem, markdownToHtml } from './utils';
import { Send, Mic, Volume2, VolumeX, StopCircle, Loader2 } from 'lucide-react';

interface AICoachProps {
  initialPrompt?: string;
  clearInitialPrompt?: () => void;
}

const quickActionMap = {
  checkin: 'Daily Check-In',
  plan3d: '3-Day DASH Plan (~1,800 mg sodium/day)',
  labels: 'Read Food Labels (sodium)',
  movement: 'Gentle Movement (20 min/day)',
  eatout: 'Eat Out Low Sodium',
};
type QuickActionKey = keyof typeof quickActionMap;

const AICoach: React.FC<AICoachProps> = ({ initialPrompt, clearInitialPrompt }) => {
  const [messages, setMessages] = useState([{ text: "Hello! I'm your DASH Coach. How can I help you today?", sender: 'ai' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeQuickActions, setActiveQuickActions] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const startInputRef = useRef(''); // Store input value when listening starts
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis>(window.speechSynthesis);

  useEffect(() => {
    const updateQuickActions = () => {
      const coachSettings = getLocalStorageItem('preferences.coachQuickActions', {
        checkin: true,
        plan3d: true,
        labels: true,
        movement: true,
        eatout: true,
      });

      const enabledActions = (Object.keys(quickActionMap) as QuickActionKey[])
        .filter(key => coachSettings[key])
        .map(key => quickActionMap[key]);

      setActiveQuickActions(enabledActions);
    };

    updateQuickActions();
    window.addEventListener('settings-changed', updateQuickActions);

    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true; // Enable continuous listening
      recognitionRef.current.interimResults = true; // Enable real-time feedback
      recognitionRef.current.lang = 'en-US'; // Default to English

      recognitionRef.current.onresult = (event: any) => {
        let transcript = '';
        for (let i = 0; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }

        // Combine with the input we had before we started listening
        const prefix = startInputRef.current;
        const separator = prefix && transcript ? ' ' : '';
        setInput(prefix + separator + transcript);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      window.removeEventListener('settings-changed', updateQuickActions);
      if (isSpeaking) {
        synthRef.current.cancel();
      }
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (initialPrompt) {
      sendMessage(initialPrompt);
      if (clearInitialPrompt) clearInitialPrompt();
    }
  }, [initialPrompt]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      startInputRef.current = input; // Capture current input before starting
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const speakText = (text: string) => {
    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      return;
    }

    // Strip markdown for cleaner speech
    const cleanText = text.replace(/[*#_]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US'; // Default to English

    // Try to find a more natural/human-sounding voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice =>
      (voice.name.includes('Google') && voice.lang.startsWith('en')) ||
      (voice.name.includes('Natural') && voice.lang.startsWith('en')) ||
      (voice.lang === 'en-US')
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onend = () => setIsSpeaking(false);

    setIsSpeaking(true);
    synthRef.current.speak(utterance);
  };

  const addBPContext = () => {
    let readings = getLocalStorageItem<any[]>('dash_bp_readings', []);

    if (readings.length === 0) {
      setInput(prev => "CONTEXT: I have no BP readings logged yet.\n\n" + prev.trim());
      inputRef.current?.focus();
      return;
    }

    readings.sort((a, b) => new Date(b.date + 'T' + b.time).getTime() - new Date(a.date + 'T' + a.time).getTime());

    const recentReadings = readings.slice(0, 5);
    let contextString = "Here are my most recent blood pressure readings for context:\n";
    recentReadings.forEach(r => {
      const date = new Date(r.date + 'T' + r.time).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      contextString += `- ${date}: ${r.systolic}/${r.diastolic} mmHg\n`;
    });

    setInput(prev => contextString + "\n" + prev.trim());
    inputRef.current?.focus();
  };

  const sendMessage = async (messageText: string): Promise<boolean> => {
    if (!messageText.trim()) return true;

    const userMessage = { text: messageText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    let success = false;

    try {
      const profile = {
        name: getLocalStorageItem('profile.name', ''),
        age: getLocalStorageItem('profile.age', ''),
        sex: getLocalStorageItem('profile.sex', ''),
        heightFt: getLocalStorageItem('profile.heightFt', ''),
        heightIn: getLocalStorageItem('profile.heightIn', ''),
        heightCm: getLocalStorageItem('profile.heightCm', ''),
        weight: getLocalStorageItem('profile.weight', ''),
        medicalConditions: getLocalStorageItem('profile.medicalConditions', ''),
        units: getLocalStorageItem('preferences.units', 'us'),
        sodiumTarget: getLocalStorageItem('preferences.sodiumTargetMg', 1800),
        exerciseLevel: getLocalStorageItem('preferences.exerciseLevelDefault', 'beginner'),
      };
      const medications: any[] = getLocalStorageItem('dash_medications_v2', []);

      let contextString = `\n\n--- USER PROFILE & CONTEXT ---\n`;
      if (profile.name) contextString += `Name: ${profile.name}\n`;
      if (profile.age) contextString += `Age: ${profile.age}\n`;
      if (profile.sex) contextString += `Sex: ${profile.sex}\n`;
      if (profile.units === 'us') {
        if (profile.heightFt && profile.heightIn) contextString += `Height: ${profile.heightFt}' ${profile.heightIn}\"\n`;
        if (profile.weight) contextString += `Weight: ${profile.weight} lbs\n`;
      } else {
        if (profile.heightCm) contextString += `Height: ${profile.heightCm} cm\n`;
        if (profile.weight) contextString += `Weight: ${profile.weight} kg\n`;
      }
      contextString += `Sodium Target: ${profile.sodiumTarget} mg/day\n`;
      contextString += `Activity Level: ${profile.exerciseLevel}\n`;
      if (profile.medicalConditions) {
        contextString += `Medical Conditions: ${profile.medicalConditions}\n`;
      } else {
        contextString += `Medical Conditions: None listed.\n`;
      }
      if (medications.length > 0) {
        contextString += `\nMedications:\n`;
        medications.forEach(med => {
          contextString += `- ${med.name} ${med.dose}${med.unit}\n`;
        });
      } else {
        contextString += `\nMedications: None listed.\n`;
      }
      contextString += `----------------------------\n`;

      const SHORT_SYSTEM_PROMPT = `IDENTITY & ROLE
You are “DASH Coach,” a digital assistant specialized in DASH eating and cardiovascular health for adults over 50. You help with nutrition, physical activity, blood pressure management, and motivation — always with empathy, clarity, and within wellness limits.

CRITICAL LIMITATIONS
You are NOT a doctor — no medical diagnoses.
You do NOT change medication dosages.
You do NOT handle emergencies — direct user to call 911 in serious cases.
Always encourage consulting a healthcare professional for important decisions.

COMMUNICATION STYLE
Empathetic, reassuring, simple (avoid complex medical jargon).
Positive, encouraging, actionable.
Brief responses (3–5 sentences), unless user asks for more detail.
Use markdown for formatting, especially for lists (* item) and bold text (**bold**).

RESPONSE DIRECTIVES
Be actionable and concrete — always include a practical suggestion.
Use the user profile actively — reference their targets like sodium, activity, preferences.
Include a brief disclaimer if answering medical or drug-related topics.`;

      const personalizedSystemPrompt = SHORT_SYSTEM_PROMPT;

      const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
      if (!apiKey) {
        const errorMessage = { text: '⚠️ API key mancante. Controlla le impostazioni di sicurezza.', sender: 'ai' };
        setMessages(prev => [...prev, errorMessage]);
        return false;
      }

      // Log di debug (mostra solo l'inizio della chiave per sicurezza)
      console.log("Controllo API Key:", apiKey ? apiKey.substring(0, 6) + "..." : "NON TROVATA");

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const fullPrompt = `${personalizedSystemPrompt}\n\n${contextString}\n\n${messageText}`;

      const result = await model.generateContent(fullPrompt);
      const responseText = result.response.text();

      if (!responseText) {
        throw new Error("L'AI ha risposto con un testo vuoto.");
      }

      const aiMessage = { text: responseText, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
      success = true;
    } catch (error) {
      console.error('Gemini API error:', error);
      const errorMsg = error instanceof Error ? error.message : "Errore sconosciuto";

      const errorMessage = {
        text: `⚠️ Errore Coach: ${errorMsg}. Se vedi '404', Google non riconosce la chiave o il modello in questa regione.`,
        sender: 'ai'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
      // Ensure loading flag is cleared even after unexpected errors
      setIsListening(false);
      setIsSpeaking(false);
    }
    return success;
  };

  const handleSend = async () => {
    const messageToSend = input;
    if (!messageToSend.trim()) return;

    setInput('');
    const success = await sendMessage(messageToSend);

    if (!success) {
      setInput(messageToSend);
    }
  };

  const handleQuickAction = (action: string) => {
    const prompt = quickActionMap[action as keyof typeof quickActionMap] || action;
    sendMessage(prompt);
  };

  return (
    <div className="flex flex-col bg-surface h-full">
      <div className="flex-grow p-2 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-2xl max-w-xs md:max-w-md shadow-sm ${msg.sender === 'user' ? 'bg-brandPrimary text-white rounded-br-none' : 'bg-brandPrimaryTint text-textPrimary rounded-bl-none'}`}>
              <div className="prose text-lg" dangerouslySetInnerHTML={{ __html: markdownToHtml(msg.text) }}></div>
              {msg.sender === 'ai' && (
                <button
                  onClick={() => speakText(msg.text)}
                  className="mt-2 text-brandPrimary/70 hover:text-brandPrimary transition-colors flex items-center gap-1 text-sm"
                  title="Read aloud"
                >
                  {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  {isSpeaking ? 'Stop' : 'Listen'}
                </button>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="p-3 rounded-2xl bg-brandPrimaryTint text-textPrimary rounded-bl-none">
              <span className="animate-pulse text-lg">● ● ●</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="p-2 bg-surface border-t border-border">
        <div className="px-2 pb-2">
          <button
            onClick={addBPContext}
            className="w-full text-left text-accentBlue font-semibold text-lg py-2 px-3 rounded-lg border-2 border-dashed border-accentBlue hover:bg-accentBlue/10 transition-colors"
          >
            + Include Recent BP Readings in Message
          </button>
        </div>
        <div className="flex overflow-x-auto whitespace-nowrap gap-2 mb-3 pb-2">
          {activeQuickActions.map(action => (
            <button key={action} onClick={() => handleQuickAction(action)} className="flex-shrink-0 px-4 py-3 bg-brandPrimaryTint text-brandPrimary rounded-full text-base font-medium hover:bg-brandAccent/50 transition-colors min-h-[48px]">
              {action}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleListening}
            className={`p-3 rounded-full transition-colors ${isListening
              ? 'bg-red-100 text-red-600 animate-pulse border border-red-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
              }`}
            title="Speak now"
          >
            {isListening ? <StopCircle size={24} /> : <Mic size={24} />}
          </button>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-grow p-3 border border-border bg-surface rounded-lg h-12 text-lg focus:border-transparent focus:ring-2 focus:ring-brandPrimary"
            placeholder={isListening ? "Listening..." : "Type or speak..."}
            disabled={loading}
          />
          <button onClick={handleSend} disabled={loading || !input.trim()} className="bg-brandPrimary text-white rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 disabled:bg-textMuted transition-colors" aria-label="Send message">
            {loading ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICoach;
