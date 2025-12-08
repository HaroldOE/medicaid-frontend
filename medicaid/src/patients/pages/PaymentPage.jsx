import { useState } from "react";
import { ArrowLeft, Lock } from "lucide-react";
import Sidebar from "../components/PatientSidebar";
import PaymentPlanCard from "../components/PaymentPlanCard";
import PaymentForm from "../components/PaymentForm";

export default function PaymentPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState("plan"); // 'plan' or 'card'
  const [selectedPlan, setSelectedPlan] = useState("one-month");

  const plans = [
    { id: "one-time", amount: 50000, duration: "One-Time Payment" },
    { id: "one-month", amount: 100000, duration: "One Month Consultation" },
    { id: "two-months", amount: 200000, duration: "Two Months Consultation" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        activeItem="Appointments"
      />

      <main className="flex-1 p-6 lg:p-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft size={20} />
            <span>Back to Appointments</span>
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Details
          </h2>
          <p className="text-gray-600 mb-8">Complete your payment securely</p>

          {step === "plan" ? (
            <>
              {/* Appointment Summary */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-4">
                  Appointment Details
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Doctor:</span>{" "}
                    <span className="font-medium">Dr. James Mitchell</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date & Time:</span>{" "}
                    <span className="font-medium">
                      Dec 15, 2025 at 10:00 AM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>{" "}
                    <span className="font-medium">Downtown Medical Center</span>
                  </div>
                </div>
              </div>

              {/* Payment Method Badge */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 flex items-center gap-3 mb-8">
                <div className="bg-blue-600 text-white p-3 rounded-lg">P</div>
                <div>
                  <p className="font-medium text-blue-900">Paystack</p>
                  <p className="text-sm text-blue-700">
                    All transactions are secure and encrypted
                  </p>
                </div>
              </div>

              {/* Plan Selection */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Choose How You Want to Pay
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {plans.map((plan) => (
                  <PaymentPlanCard
                    key={plan.id}
                    amount={plan.amount}
                    duration={plan.duration}
                    isSelected={selectedPlan === plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                  />
                ))}
              </div>

              <button
                onClick={() => setStep("card")}
                className="w-full bg-blue-900 text-white py-5 rounded-xl text-lg font-bold hover:bg-blue-800 transition flex items-center justify-center gap-3"
              >
                Pay Now
                <Lock size={20} />
              </button>
            </>
          ) : (
            <>
              {/* Card Form + Summary */}
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <PaymentForm />
                </div>

                <div className="space-y-6">
                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Payment Timeline</span>{" "}
                        <span className="font-medium">1 month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Base Amount:</span> <span>₦100,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment Date:</span> <span>05/12/2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-center gap-3">
                    <div className="bg-blue-600 text-white p-3 rounded-lg">
                      P
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Paystack</p>
                    </div>
                  </div>

                  <div className="bg-blue-900 text-white rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg">Total Amount to Pay</span>
                      <span className="text-2xl font-bold">₦100,000</span>
                    </div>
                    <button className="w-full bg-white text-blue-900 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
                      Complete Payment
                    </button>
                  </div>

                  <button className="w-full text-center text-gray-600 hover:text-gray-900">
                    ← Back to Appointments
                  </button>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Lock size={16} className="text-green-500" />
                    <span>256-bit SSL encrypted transaction</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
