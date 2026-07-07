function IncomeStatistics({ summary }) {

    if (!summary) return null;

    const averageIncome = summary.averageIncome ?? 0;

    return (

        <div className="bg-slate-900 rounded-xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">

                Income Statistics

            </h2>

            <div className="text-center">

                <h1 className="text-5xl font-bold text-green-400">

                    ₹ {averageIncome.toLocaleString("en-IN", {
                        maximumFractionDigits: 0
                    })}

                </h1>

                <p className="text-slate-400 mt-3">

                    Average Applicant Income

                </p>

            </div>

        </div>

    );

}

export default IncomeStatistics;