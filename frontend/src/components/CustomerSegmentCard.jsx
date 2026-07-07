function CustomerSegmentCard({ summary }) {

    if (!summary) return null;

    const bestEmployment =
        summary.bestEmployment ?? "No Data";

    const approvalRate =
        summary.approvalRate ?? 0;

    return (

        <div className="bg-slate-900 rounded-xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">

                Best Customer Segment

            </h2>

            <div className="flex flex-col items-center">

                <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-6">

                    <span className="text-5xl">

                        🏆

                    </span>

                </div>

                <h1 className="text-4xl font-bold text-green-400 text-center">

                    {bestEmployment}

                </h1>

                <p className="text-slate-400 mt-3 text-center">

                    Highest Performing Employment Category

                </p>

                <div className="mt-8 w-full">

                    <div className="flex justify-between mb-2">

                        <span className="text-slate-400">

                            Portfolio Approval

                        </span>

                        <span className="text-cyan-400 font-semibold">

                            {approvalRate.toFixed(1)}%

                        </span>

                    </div>

                    <div className="w-full bg-slate-800 rounded-full h-3">

                        <div
                            className="bg-green-500 h-3 rounded-full transition-all duration-700"
                            style={{
                                width: `${Math.min(approvalRate, 100)}%`
                            }}
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}

export default CustomerSegmentCard;