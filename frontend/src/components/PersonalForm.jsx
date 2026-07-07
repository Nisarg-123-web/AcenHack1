function PersonalForm({ formData, handleChange }) {

    return (

        <div className="space-y-6">

            <div>

                <label className="block text-white mb-2">
                    Full Name
                </label>

                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
                />

            </div>

            <div>

                <label className="block text-white mb-2">
                    Email
                </label>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
                />

            </div>

            <div>

                <label className="block text-white mb-2">
                    Phone Number
                </label>

                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
                />

            </div>

        </div>

    );

}

export default PersonalForm;