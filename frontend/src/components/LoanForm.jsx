function LoanForm({ formData, handleChange }) {
  return (
    <div className="space-y-6">

      <div>
        <label className="block text-white mb-2">
          Loan Amount (₹)
        </label>

        <input
          type="number"
          name="loanAmount"
          value={formData.loanAmount || ""}
          onChange={handleChange}
          placeholder="Enter Loan Amount"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
        />
      </div>

      <div>
        <label className="block text-white mb-2">
          Loan Purpose
        </label>

        <select
          name="loanPurpose"
          value={formData.loanPurpose || ""}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
        >
          <option value="">Select Purpose</option>
          <option value="Home Loan">Home Loan</option>
          <option value="Personal Loan">Personal Loan</option>
          <option value="Education Loan">Education Loan</option>
          <option value="Vehicle Loan">Vehicle Loan</option>
          <option value="Business Loan">Business Loan</option>
        </select>
      </div>

      <div>
        <label className="block text-white mb-2">
          Loan Tenure (Years)
        </label>

        <select
          name="loanTenure"
          value={formData.loanTenure || ""}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
        >
          <option value="">Select Tenure</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="5">5 Years</option>
          <option value="10">10 Years</option>
        </select>
      </div>

    </div>
  );
}

export default LoanForm;