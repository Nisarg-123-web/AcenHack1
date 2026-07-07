function DashboardCards({ analytics }) {

    if (!analytics) return null;

    const cards = [
        {
            title: "Applications",
            value: analytics.totalApplications ?? 0,
            icon: "📄",
            color: "bg-cyan-600",
            border: "border-cyan-500"
        },
        {
            title: "Submitted",
            value: analytics.submittedApplications ?? 0,
            icon: "✅",
            color: "bg-green-600",
            border: "border-green-500"
        },
        {
            title: "Dropped",
            value: analytics.droppedApplications ?? 0,
            icon: "⚠️",
            color: "bg-red-600",
            border: "border-red-500"
        },
        {
            title: "Conversion",
            value: `${(analytics.conversionRate ?? 0).toFixed(1)}%`,
            icon: "📈",
            color: "bg-purple-600",
            border: "border-purple-500"
        }
    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

            {cards.map((card) => (

                <div
                    key={card.title}
                    className={`bg-slate-900 rounded-2xl border-l-4 ${card.border}
                    shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1
                    transition-all duration-300 overflow-hidden`}
                >

                    <div className={`${card.color} px-5 py-4`}>

                        <div className="flex items-center justify-between">

                            <h3 className="text-white text-lg font-semibold">

                                {card.title}

                            </h3>

                            <span className="text-3xl">

                                {card.icon}

                            </span>

                        </div>

                    </div>

                    <div className="p-6">

                        <h1 className="text-5xl font-bold text-white">

                            {card.value}

                        </h1>

                        <p className="text-slate-400 mt-3">

                            Updated in real time

                        </p>

                    </div>

                </div>

            ))}

        </div>

    );

}

export default DashboardCards;