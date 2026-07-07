import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function PredictionPieChart({ applications }) {

    const approved =
        applications.filter(
            a => a.prediction === "Y"
        ).length;

    const rejected =
        applications.filter(
            a => a.prediction === "N"
        ).length;

    const data = [

        {
            name: "Approved",
            value: approved
        },

        {
            name: "Rejected",
            value: rejected
        }

    ];

    const colors = [

        "#22c55e",

        "#ef4444"

    ];

    return (

        <div className="bg-slate-900 rounded-xl p-8">

            <h2 className="text-2xl text-cyan-400 font-bold mb-6">

                Prediction Distribution

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={100}
                    >

                        {

                            data.map(
                                (entry,index)=>

                                <Cell
                                    key={index}
                                    fill={colors[index]}
                                />

                            )

                        }

                    </Pie>

                    <Tooltip/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default PredictionPieChart;