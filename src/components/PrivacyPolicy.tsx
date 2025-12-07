import React from 'react';

interface LegalPageProps {
  setScreen: React.Dispatch<React.SetStateAction<any>>;
}

const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const PrivacyPolicy: React.FC<LegalPageProps> = ({ setScreen }) => {
  return (
    <div className="space-y-4">
      <button onClick={() => setScreen('home')} className="flex items-center gap-1 text-lg text-textSecondary font-bold hover:underline bg-transparent border-none p-0 cursor-pointer">
        <BackIcon /> Back to Home
      </button>
      <div className="bg-surface p-5 rounded-xl shadow-sm shadow-shadowSoft border border-brandPrimaryDark space-y-4">
        <h1 className="text-2xl font-bold text-textPrimary">Privacy Policy</h1>
        <div className="prose text-textSecondary text-lg max-w-none space-y-4">
          <p><strong>Last Updated:</strong> December 3, 2025</p>

          <p>
            At <strong>DASH Over 50 METHOD™</strong> we prioritize your privacy. This Privacy Policy explains how we handle your information when you use our application.
          </p>

          <h2 className="text-xl font-semibold text-textPrimary mt-4">1. Data Storage (Local Only)</h2>
          <p>
            This application stores all user data <strong>exclusively on the device</strong>. No personal data is transmitted to or stored on our servers. It is your responsibility to secure your device.
          </p>

          <h2 className="text-xl font-semibold text-textPrimary mt-4">2. Data Sharing</h2>
          <p>
            We do <strong>not share, sell, or transfer</strong> any of your data to third parties. All information remains on your phone.
          </p>

          <h2 className="text-xl font-semibold text-textPrimary mt-4">3. Sensitive Health Information</h2>
          <p>
            Health‑related data (blood pressure, weight, medical conditions, etc.) is considered sensitive personal information. It is stored locally and never transmitted.
          </p>

          <h2 className="text-xl font-semibold text-textPrimary mt-4">4. Your Rights (CCPA/CPRA)</h2>
          <ul className="list-disc pl-5">
            <li><strong>Access &amp; Correction:</strong> View and edit your data directly within the app.</li>
            <li><strong>Deletion:</strong> Delete all data via “Reset App Data” or clear your browser cache.</li>
            <li><strong>Export:</strong> Export your data to a JSON file from the Settings menu.</li>
            <li><strong>Contact:</strong> <a href="mailto:help@dashover50.com" className="text-brandPrimary hover:underline">help@dashover50.com</a></li>
          </ul>

          <h2 className="text-xl font-semibold text-textPrimary mt-4">5. Security</h2>
          <p>
            We recommend protecting your device with a PIN, password, or biometric lock. The app does not add extra encryption beyond the device’s native security.
          </p>

          <h2 className="text-xl font-semibold text-textPrimary mt-4">6. Children’s Privacy</h2>
          <p>
            The app is not intended for children under 13 years of age and does not knowingly collect information from minors.
          </p>

          <p className="text-sm text-textMuted">© 2025 app.dashover50.com</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
