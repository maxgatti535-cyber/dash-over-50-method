import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    // Abilita CORS per permettere le chiamate dal tuo sito GitHub
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // In produzione metti il tuo dominio github
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt, system } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt mancante" });
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        // Usiamo una versione specifica e stabile invece di -latest per evitare il cambio forzato del 30 gennaio
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const chat = model.startChat({
            history: [], // Inizializziamo la storia vuota per gestire correttamente il contesto
            systemInstruction: system || "Sei un assistente utile.",
        });

        const result = await chat.sendMessage(prompt);
        const text = result.response.text();

        res.status(200).json({ answer: text });
    } catch (e) {
        console.error("Errore Gemini:", e);
        // Logga l'errore ma non esporre dettagli all'utente
        res.status(500).json({ error: "Errore interno del modello" });
    }
}
