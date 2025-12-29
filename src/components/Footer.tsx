import React from 'react';

interface FooterProps {
  setScreen: (screen: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setScreen }) => {
  return (
    <footer
      className="glass-panel border-t border-white/50 w-full px-4 pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] premium-shadow mt-auto"
      aria-label="App footer"
    >
      <div className="max-w-[430px] mx-auto text-center space-y-2">
        <p className="text-sm text-brandPrimary">
          DASH Over 50 METHOD™ · v0.1
        </p>
        <p className="text-sm text-brandPrimary leading-tight">
          Educational only — not medical advice. If severe symptoms or BP ≥180/120 with concerning symptoms, call 911 (U.S.).
        </p>
        <div className="flex justify-center items-center space-x-2 pt-1">
          <button onClick={() => setScreen('privacy')} className="text-sm text-brandPrimary hover:underline active:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandPrimary rounded-sm">
            Privacy
          </button>
          <span className="text-brandPrimary text-sm" aria-hidden="true">•</span>
          <button onClick={() => setScreen('terms')} className="text-sm text-brandPrimary hover:underline active:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandPrimary rounded-sm">
            Terms
          </button>
          <span className="text-brandPrimary text-sm" aria-hidden="true">•</span>
          <a href="mailto:help@dashover50.com" target="_blank" rel="noopener noreferrer" className="text-sm text-brandPrimary hover:underline active:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandPrimary rounded-sm">
            Contact
          </a>
        </div>
        <p className="text-xs text-brandPrimary/60 mt-2">
          © 2025 app.dashover50.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;