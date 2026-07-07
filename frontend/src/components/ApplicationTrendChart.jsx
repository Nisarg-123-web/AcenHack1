import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

function ApplicationTrendChart({ applications }) {

    const monthly = {};

    applications.forEach(app => {

        if (!app.createdAt) return;

        const month = new Date(app.createdAt)
            .toLocaleString("default", {
                month: "short"
            });

        monthly[month] =
            (monthly[month] || 0) + 1;

    });

    const data = Object.keys(monthly).map(key => ({

        month: key,

        applications: monthly[key]

    }));

    return (

        <div className="bg-slate-900 rounded-xl p-8">

            <h2 className="text-2xl text-cyan-400 font-bold mb-6">

                Application Trend

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <LineChart data={data}>

                    <CartesianGrid stroke="#444"/>

                    <XAxis dataKey="month"/>

                    <YAxis/>

                    <Tooltip/>

                    <Line
                        dataKey="applications"
                        stroke="#06b6d4"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default ApplicationTrendChart;