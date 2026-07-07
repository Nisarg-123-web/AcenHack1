function EmploymentForm({ formData, handleChange }) {
  return (
    <div className="space-y-6">

      <div>
        <label className="block text-white mb-2">
          Employment Type
        </label>

        <select
          name="employmentType"
          value={formData.employmentType}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
        >
          <option value="">Select Employment Type</option>
          <option value="Salaried">Salaried</option>
          <option value="Self Employed">Self Employed</option>
          <option value="Business">Business</option>
          <option value="Student">Student</option>
        </select>
      </div>

      <div>
        <label className="block text-white mb-2">
          Monthly Income
        </label>

        <input
          type="number"
          name="monthlyIncome"
          value={formData.monthlyIncome}
          onChange={handleChange}
          placeholder="Enter Monthly Income"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
        />
      </div>

    </div>
  );
}

export default EmploymentForm;