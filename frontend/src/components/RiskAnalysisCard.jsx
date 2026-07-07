function RiskAnalysisCard({ applications }) {

    if (!applications || applications.length === 0) return null;

    const approved = applications.filter(
        app => app.prediction === "Y"
    ).length;

    const rejected = applications.filter(
        app => app.prediction === "N"
    ).length;

    const approvalRate =
        ((approved / applications.length) * 100).toFixed(1);

    const riskLevel =
        approvalRate >= 70
            ? "LOW"
            : approvalRate >= 40
            ? "MEDIUM"
            : "HIGH";

    const color =
        riskLevel === "LOW"
            ? "text-green-400"
            : riskLevel === "MEDIUM"
            ? "text-yellow-400"
            : "text-red-400";

    return (

        <div className="bg-slate-900 rounded-xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">

                Portfolio Risk Analysis

            </h2>

            <div className="space-y-5">

                <div className="flex justify-between">

                    <span className="text-slate-300">

                        Approved

                    </span>

                    <span className="text-green-400 font-bold">

                        {approved}

                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-slate-300">

                        Rejected

                    </span>

                    <span className="text-red-400 font-bold">

                        {rejected}

                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-slate-300">

                        Approval Rate

                    </span>

                    <span className="text-cyan-400 font-bold">

                        {approvalRate}%

                    </span>

                </div>

                <hr className="border-slate-700"/>

                <div className="text-center">

                    <h1 className={`text-5xl font-bold ${color}`}>

                        {riskLevel}

                    </h1>

                    <p className="text-slate-400 mt-3">

                        Overall Portfolio Risk

                    </p>

                </div>

            </div>

        </div>

    );

}

export default RiskAnalysisCard;