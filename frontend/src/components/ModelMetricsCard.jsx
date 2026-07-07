import { useEffect, useState } from "react";
import { getModelMetrics } from "../services/dashboardService";

function ModelMetricsCard() {

    const [metrics, setMetrics] = useState(null);

    useEffect(() => {
        loadMetrics();
    }, []);

    const loadMetrics = async () => {
        try {
            const data = await getModelMetrics();
            setMetrics(data);
        } catch (error) {
            console.error(error);
        }
    };

    if (!metrics) {
        return (
            <div className="bg-slate-900 rounded-xl p-8">
                <h2 className="text-white">Loading Metrics...</h2>
            </div>
        );
    }

    const cards = [
        { title: "Accuracy", value: metrics.accuracy },
        { title: "Precision", value: metrics.precision },
        { title: "Recall", value: metrics.recall },
        { title: "F1 Score", value: metrics.f1_score }
    ];

    return (
        <div className="bg-slate-900 rounded-xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                Model Performance
            </h2>

            <div className="grid grid-cols-2 gap-5">

                {cards.map(card => (

                    <div
                        key={card.title}
                        className="bg-slate-800 rounded-xl p-5"
                    >

                        <p className="text-slate-400">
                            {card.title}
                        </p>

                        <h1 className="text-3xl font-bold text-green-400 mt-2">
                            {card.value}%
                        </h1>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default ModelMetricsCard;