function LoanStatistics({ summary }) {

    if (!summary) return null;

    const averageLoan = summary.averageLoan ?? 0;

    return (

        <div className="bg-slate-900 rounded-xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">

                Loan Statistics

            </h2>

            <div className="text-center">

                <h1 className="text-5xl font-bold text-yellow-400">

                    ₹ {averageLoan.toLocaleString("en-IN", {
                        maximumFractionDigits: 0
                    })}

                </h1>

                <p className="text-slate-400 mt-3">

                    Average Loan Amount

                </p>

            </div>

        </div>

    );

}

export default LoanStatistics;