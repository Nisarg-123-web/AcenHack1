function BusinessRecommendation({ summary }) {

    if (!summary) return null;

    const recommendation =
        summary.recommendation ??
        "No recommendations available.";

    const approvalRate =
        summary.approvalRate ?? 0;

    const bestEmployment =
        summary.bestEmployment ?? "N/A";

    return (

        <div className="bg-slate-900 rounded-xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">

                AI Business Recommendation

            </h2>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">

                <h3 className="text-cyan-300 font-semibold mb-3">

                    Primary Recommendation

                </h3>

                <p className="text-white leading-8">

                    {recommendation}

                </p>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-slate-800 rounded-lg p-4">

                    <p className="text-slate-400 text-sm">

                        Approval Rate

                    </p>

                    <h3 className="text-green-400 text-2xl font-bold mt-2">

                        {approvalRate.toFixed(1)}%

                    </h3>

                </div>

                <div className="bg-slate-800 rounded-lg p-4">

                    <p className="text-slate-400 text-sm">

                        Best Segment

                    </p>

                    <h3 className="text-cyan-400 text-2xl font-bold mt-2">

                        {bestEmployment}

                    </h3>

                </div>

            </div>

            <div className="mt-8">

                <h3 className="text-cyan-300 font-semibold mb-4">

                    Suggested Actions

                </h3>

                <div className="space-y-3">

                    <div className="flex items-center gap-3">

                        <span className="text-green-400 text-xl">✔</span>

                        <span className="text-white">

                            Enable Save & Resume for incomplete applications

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <span className="text-green-400 text-xl">✔</span>

                        <span className="text-white">

                            Simplify the Loan Details step

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <span className="text-green-400 text-xl">✔</span>

                        <span className="text-white">

                            Send reminders to abandoned applicants

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <span className="text-green-400 text-xl">✔</span>

                        <span className="text-white">

                            Focus marketing on the highest-converting customer segment

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default BusinessRecommendation;