import { useState } from "react";

import ProgressBar from "../components/ProgressBar";
import PersonalForm from "../components/PersonalForm";
import ProfileForm from "../components/ProfileForm";
import EmploymentForm from "../components/EmploymentForm";
import LoanForm from "../components/LoanForm";
import ReviewForm from "../components/ReviewForm";

import {
  saveApplication,
  saveJourneyEvent,
} from "../services/applicationService";

function LoanApplication() {
  const [step, setStep] = useState(1);
  const [predictionResult, setPredictionResult] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",

    gender: "",
    married: "",
    education: "",
    creditHistory: "",

    employmentType: "",
    monthlyIncome: "",

    loanAmount: "",
    loanPurpose: "",
    loanTenure: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = async () => {
    const eventNames = {
      1: "Personal Details Completed",
      2: "Profile Details Completed",
      3: "Employment Details Completed",
      4: "Loan Details Completed",
    };

    try {
      await saveJourneyEvent({
        customerName:
          formData.fullName === ""
            ? "Anonymous"
            : formData.fullName,

        eventName: eventNames[step],
        stepNumber: step,
      });
    } catch (error) {
      console.error("Journey Event Error:", error);
    }

    if (step < 5) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      await saveJourneyEvent({
        customerName:
          formData.fullName === ""
            ? "Anonymous"
            : formData.fullName,

        eventName: "Application Submitted",
        stepNumber: 5,
      });

      const response = await saveApplication(formData);

setPredictionResult(response);

      setFormData({
        fullName: "",
        email: "",
        phone: "",

        gender: "",
        married: "",
        education: "",
        creditHistory: "",

        employmentType: "",
        monthlyIncome: "",

        loanAmount: "",
        loanPurpose: "",
        loanTenure: "",
      });

      setStep(1);
    } catch (error) {
      console.error(error);
      alert("Submission Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">

      <div className="bg-slate-900 w-full max-w-3xl rounded-2xl shadow-xl p-10">

        <ProgressBar step={step} totalSteps={5} />

        <h1 className="text-4xl font-bold text-cyan-400 mt-8">
          Loan Application
        </h1>

        <p className="text-slate-400 mb-8">
          Step {step} of 5
        </p>

        {/* Step 1 */}

        {step === 1 && (
          <PersonalForm
            formData={formData}
            handleChange={handleChange}
          />
        )}

        {/* Step 2 */}

        {step === 2 && (
          <ProfileForm
            formData={formData}
            handleChange={handleChange}
          />
        )}

        {/* Step 3 */}

        {step === 3 && (
          <EmploymentForm
            formData={formData}
            handleChange={handleChange}
          />
        )}

        {/* Step 4 */}

        {step === 4 && (
          <LoanForm
            formData={formData}
            handleChange={handleChange}
          />
        )}

        {/* Step 5 */}

        {step === 5 && (
          <ReviewForm
            formData={formData}
          />
        )}

        <div className="flex justify-between mt-10">

          {step > 1 ? (
            <button
              onClick={previousStep}
              className="px-8 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold transition"
            >
              Previous
            </button>
          ) : (
            <div></div>
          )}

          {step < 5 ? (
            <button
              onClick={nextStep}
              className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition"
            >
              Submit Application
            </button>
          )}

        </div>

      </div>
      {predictionResult && (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

        <div className="bg-slate-900 rounded-2xl p-8 w-[450px] shadow-2xl">

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                🤖 AI Loan Assessment
            </h2>

            <div className="space-y-4 text-white">

                <div className="flex justify-between">

                    <span>Prediction</span>

                    <span className="font-bold text-green-400">
                        {predictionResult.prediction === "Y"
                            ? "APPROVED"
                            : "NOT APPROVED"}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span>Approval Probability</span>

                    <span className="font-bold">
                        {predictionResult.probability}%
                    </span>

                </div>

            </div>

            <button
                onClick={() => setPredictionResult(null)}
                className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 rounded-lg py-3 text-white font-bold"
            >
                Continue
            </button>

        </div>

    </div>
)}

    </div>
  );
}

export default LoanApplication;