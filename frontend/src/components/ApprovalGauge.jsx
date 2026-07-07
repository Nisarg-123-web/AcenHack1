function ApprovalGauge({ summary }) {

    if (!summary) return null;

    const approvalRate = summary.approvalRate ?? 0;

    const color =
        approvalRate >= 70
            ? "border-green-500"
            : approvalRate >= 40
            ? "border-yellow-500"
            : "border-red-500";

    const textColor =
        approvalRate >= 70
            ? "text-green-400"
            : approvalRate >= 40
            ? "text-yellow-400"
            : "text-red-400";

    return (

        <div className="bg-slate-900 rounded-xl p-8 shadow-lg">

            <h2 className="text-2xl text-cyan-400 font-bold mb-8">

                Approval Rate

            </h2>

            <div className="flex justify-center">

                <div
                    className={`w-44 h-44 rounded-full border-[14px] ${color}
                    flex items-center justify-center transition-all duration-500`}
                >

                    <div className="text-center">

                        <h1 className={`text-5xl font-bold ${textColor}`}>

                            {approvalRate.toFixed(1)}%

                        </h1>

                        <p className="text-slate-400 mt-2">

                            Approved

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ApprovalGauge;