// src/components/Preferences.jsx
import { Check, Square, Mail } from "lucide-react";
import { useState } from "react";

export default function Preferences() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [twoFA, setTwoFA] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Preferences</h3>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-lg">
              <Mail className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-600">
                Receive email updates for consultations
              </p>
            </div>
          </div>
          <button
            onClick={() => setEmailNotif(!emailNotif)}
            className="relative w-12 h-6 bg-blue-600 rounded-full transition"
          >
            {emailNotif && (
              <Check className="w-5 h-5 text-white absolute top-0.5 left-0.5" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-lg">
              <Square className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <p className="font-medium text-gray-900">
                Two-Factor Authentications
              </p>
              <p className="text-sm text-gray-600">
                Enable 2FA for enhanced security
              </p>
            </div>
          </div>
          <button
            onClick={() => setTwoFA(!twoFA)}
            className={`relative w-12 h-6 rounded-full transition ${
              twoFA ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            {twoFA && (
              <Check className="w-5 h-5 text-white absolute top-0.5 left-0.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
