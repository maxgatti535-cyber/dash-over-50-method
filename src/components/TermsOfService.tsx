import React from 'react';

interface LegalPageProps {
  setScreen: React.Dispatch<React.SetStateAction<any>>;
}

const BackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;

const TermsOfService: React.FC<LegalPageProps> = ({ setScreen }) => {
  return (
    <div className="space-y-4">
      <button onClick={() => setScreen('home')} className="flex items-center gap-1 text-lg text-textSecondary font-bold hover:text-brandPrimary mb-4">
        <BackIcon /> Back to Home
      </button>
      <div className="bg-surface p-5 rounded-xl shadow-sm shadow-shadowSoft border border-brandPrimaryDark space-y-4">
        <h1 className="text-2xl font-bold text-textPrimary">Terms of Service</h1>
        <div className="prose text-textSecondary text-lg max-w-none space-y-4">
          <p><strong>Last Updated:</strong> December 3, 2025</p>

          <p>
            Welcome to <strong>DASH Over 50 METHOD™</strong>. By accessing or using our web application, you agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-xl font-semibold text-textPrimary">1. Medical Disclaimer (Important)</h2>
          <p className="font-bold text-warning bg-yellow-50 p-2 rounded border border-yellow-200">
            This application is for educational and informational purposes only. It is NOT a medical device and does NOT provide medical advice, diagnosis, or treatment.
          </p>
          <p>
            Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this application.
          </p>

          <h2 className="text-xl font-semibold text-textPrimary">2. Use of the Application</h2>
          <p>
            You are granted a non-exclusive, non-transferable, revocable license to use the application for your personal, non-commercial use. You agree not to use the app for any unlawful purpose.
          </p>

          <h2 className="text-xl font-semibold text-textPrimary">3. Data Responsibility</h2>
          <p>
            You understand that your data is stored locally on your device. You are responsible for backing up your data (using the Export feature) and securing access to your device. We are not liable for any data loss resulting from device failure, browser cache clearing, or other local issues.
          </p>

          <h2 className="text-xl font-semibold text-textPrimary">4. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, <strong>DASH Over 50 METHOD™</strong> shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data or health complications, arising out of or in connection with your use of the application.
          </p>

          <h2 className="text-xl font-semibold text-textPrimary">5. Contact</h2>
          <p>
            For any questions regarding these Terms, please contact us at:
            <br />
            <a href="mailto:help@dashover50.com" className="text-brandPrimary hover:underline">help@dashover50.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
