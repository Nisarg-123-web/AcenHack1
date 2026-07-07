function ReviewForm({ formData }) {
  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold text-cyan-400">
        Review Your Application
      </h2>

      <div className="bg-slate-800 rounded-xl p-6 space-y-4">

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">Full Name</span>
          <span className="text-white">{formData.fullName}</span>
        </div>

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">Email</span>
          <span className="text-white">{formData.email}</span>
        </div>

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">Phone</span>
          <span className="text-white">{formData.phone}</span>
        </div>
        <div className="flex justify-between border-b border-slate-700 pb-2">
  <span className="text-slate-400">Gender</span>
  <span className="text-white">{formData.gender}</span>
</div>

<div className="flex justify-between border-b border-slate-700 pb-2">
  <span className="text-slate-400">Married</span>
  <span className="text-white">{formData.married}</span>
</div>

<div className="flex justify-between border-b border-slate-700 pb-2">
  <span className="text-slate-400">Education</span>
  <span className="text-white">{formData.education}</span>
</div>

<div className="flex justify-between border-b border-slate-700 pb-2">
  <span className="text-slate-400">Credit History</span>
  <span className="text-white">
    {formData.creditHistory === "1" ? "Good" : "Poor"}
  </span>
</div>

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">Employment</span>
          <span className="text-white">{formData.employmentType}</span>
        </div>

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">Monthly Income</span>
          <span className="text-white">
            ₹ {formData.monthlyIncome}
          </span>
        </div>

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">Loan Amount</span>
          <span className="text-white">
            ₹ {formData.loanAmount}
          </span>
        </div>

        <div className="flex justify-between border-b border-slate-700 pb-2">
          <span className="text-slate-400">Loan Purpose</span>
          <span className="text-white">
            {formData.loanPurpose}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Loan Tenure</span>
          <span className="text-white">
            {formData.loanTenure} Years
          </span>
        </div>

      </div>

    </div>
  );
}

export default ReviewForm;