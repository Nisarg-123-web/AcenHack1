function ProfileForm({ formData, handleChange }) {

    return (

        <div className="space-y-6">

            <div>

                <label className="block text-white mb-2">
                    Gender
                </label>

                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

            </div>

            <div>

                <label className="block text-white mb-2">
                    Married
                </label>

                <select
                    name="married"
                    value={formData.married}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
                >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

            </div>

            <div>

                <label className="block text-white mb-2">
                    Education
                </label>

                <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
                >
                    <option value="">Select</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Not Graduate">Not Graduate</option>
                </select>

            </div>

            <div>

                <label className="block text-white mb-2">
                    Credit History
                </label>

                <select
                    name="creditHistory"
                    value={formData.creditHistory}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
                >
                    <option value="">Select</option>
                    <option value="1">Good</option>
                    <option value="0">Poor</option>
                </select>

            </div>

        </div>

    );

}

export default ProfileForm;