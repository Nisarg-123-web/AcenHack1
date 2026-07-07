function AIInsightCard({ analytics }) {

    if (!analytics) return null;

    const recommendations = [];

    if (analytics.conversionRate < 60) {
        recommendations.push("Improve the Loan Details step to increase completion.");
    }

    if (analytics.droppedApplications > analytics.submittedApplications) {
        recommendations.push("High drop-off detected. Consider reducing required fields.");
    }

    recommendations.push("Enable auto-save for partially completed applications.");
    recommendations.push("Send reminder notifications to abandoned users.");
    recommendations.push("Review eligibility questions for simplification.");

    return (

        <div className="bg-slate-900 rounded-xl p-8">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                AI Recommendations
            </h2>

            <div className="space-y-4">

                {

                    recommendations.map((item, index) => (

                        <div
                            key={index}
                            className="bg-slate-800 rounded-lg p-4 text-white"
                        >

                            ✅ {item}

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default AIInsightCard;