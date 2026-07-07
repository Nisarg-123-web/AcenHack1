function ProgressBar({ step }) {

    const percentage = (step / 4) * 100;

    return (

        <div className="mb-10">

            <div className="flex justify-between mb-2 text-sm text-slate-300">

                <span>Application Progress</span>

                <span>{percentage}%</span>

            </div>

            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

                <div
                    className="h-full bg-cyan-500 transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                ></div>

            </div>

            <div className="flex justify-between mt-3 text-xs text-slate-400">

                <span className={step >= 1 ? "text-cyan-400 font-semibold" : ""}>
                    Personal
                </span>

                <span className={step >= 2 ? "text-cyan-400 font-semibold" : ""}>
                    Employment
                </span>

                <span className={step >= 3 ? "text-cyan-400 font-semibold" : ""}>
                    Loan
                </span>

                <span className={step >= 4 ? "text-cyan-400 font-semibold" : ""}>
                    Review
                </span>

            </div>

        </div>

    );

}

export default ProgressBar;