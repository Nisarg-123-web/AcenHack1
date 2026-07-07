function ExecutiveSummary({ summary }) {

    if (!summary) return null;

    const approvalRate = summary.approvalRate ?? 0;

    const averageIncome = summary.averageIncome ?? 0;

    const averageLoan = summary.averageLoan ?? 0;

    const averageProbability = summary.averageProbability ?? 0;

    const recommendation =
        summary.recommendation ??
        "No recommendation available.";

    return (

        <div className="bg-slate-900 rounded-xl p-8 shadow-lg">

            <div className="flex items-center justify-between mb-8">

                <h2 className="text-2xl font-bold text-cyan-400">

                    Executive Summary

                </h2>

                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">

                    AI Generated

                </span>

            </div>

            <div className="grid grid-cols-2 gap-6">

                <div className="bg-slate-800 rounded-xl p-5">

                    <p className="text-slate-400 text-sm">

                        Approval Rate

                    </p>

                    <h3 className="text-3xl font-bold text-green-400 mt-2">

                        {approvalRate.toFixed(1)}%

                    </h3>

                </div>

                <div className="bg-slate-800 rounded-xl p-5">

                    <p className="text-slate-400 text-sm">

                        ML Confidence

                    </p>

                    <h3 className="text-3xl font-bold text-cyan-400 mt-2">

                        {averageProbability.toFixed(1)}%

                    </h3>

                </div>

                <div className="bg-slate-800 rounded-xl p-5">

                    <p className="text-slate-400 text-sm">

                        Average Income

                    </p>

                    <h3 className="text-2xl font-bold text-white mt-2">

                        ₹ {averageIncome.toLocaleString("en-IN", {
                            maximumFractionDigits: 0
                        })}

                    </h3>

                </div>

                <div className="bg-slate-800 rounded-xl p-5">

                    <p className="text-slate-400 text-sm">

                        Average Loan

                    </p>

                    <h3 className="text-2xl font-bold text-white mt-2">

                        ₹ {averageLoan.toLocaleString("en-IN", {
                            maximumFractionDigits: 0
                        })}

                    </h3>

                </div>

            </div>

            <div className="mt-8 p-6 bg-slate-800 rounded-xl border-l-4 border-cyan-500">

                <h3 className="text-cyan-300 font-semibold mb-3">

                    AI Recommendation

                </h3>

                <p className="text-slate-200 leading-7">

                    {recommendation}

                </p>

            </div>

            <div className="mt-8">

                <h3 className="text-cyan-300 font-semibold mb-4">

                    Executive Insights

                </h3>

                <div className="space-y-3">

                    <div className="flex items-center gap-3">

                        <span className="text-green-400">✔</span>

                        <span className="text-white">

                            Portfolio approval rate is currently
                            <strong> {approvalRate.toFixed(1)}%</strong>

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <span className="text-green-400">✔</span>

                        <span className="text-white">

                            Average ML confidence is
                            <strong> {averageProbability.toFixed(1)}%</strong>

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <span className="text-green-400">✔</span>

                        <span className="text-white">

                            Monitor customer drop-offs regularly to improve conversions.

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ExecutiveSummary;