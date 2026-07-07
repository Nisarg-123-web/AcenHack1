function DropOffAnalysis({ summary }) {

    if (!summary) return null;

    const dropRate = summary.dropRate ?? 0;

    const highestDropStep =
        summary.highestDropStep ?? "N/A";

    let severity = "";
    let color = "";

    if (dropRate >= 70) {

        severity = "HIGH";
        color = "text-red-400";

    }

    else if (dropRate >= 40) {

        severity = "MEDIUM";
        color = "text-yellow-400";

    }

    else {

        severity = "LOW";
        color = "text-green-400";

    }

    return (

        <div className="bg-slate-900 rounded-xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">

                Drop-Off Analysis

            </h2>

            <div className="space-y-5">

                <div className="flex justify-between">

                    <span className="text-slate-400">

                        Highest Drop Step

                    </span>

                    <span className="text-white font-bold">

                        {highestDropStep}

                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-slate-400">

                        Drop-Off Rate

                    </span>

                    <span className="text-cyan-400 font-bold">

                        {dropRate.toFixed(1)}%

                    </span>

                </div>

                <div className="mt-6">

                    <div className="w-full bg-slate-800 rounded-full h-3">

                        <div
                            className="bg-cyan-500 h-3 rounded-full transition-all duration-700"
                            style={{
                                width: `${Math.min(dropRate, 100)}%`
                            }}
                        />

                    </div>

                </div>

                <div className="text-center mt-8">

                    <h1 className={`text-5xl font-bold ${color}`}>

                        {severity}

                    </h1>

                    <p className="text-slate-400 mt-2">

                        Journey Health

                    </p>

                </div>

            </div>

        </div>

    );

}

export default DropOffAnalysis;