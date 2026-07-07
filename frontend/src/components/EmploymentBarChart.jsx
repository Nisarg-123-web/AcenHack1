import {

    BarChart,

    Bar,

    XAxis,

    YAxis,

    Tooltip,

    ResponsiveContainer

} from "recharts";

function EmploymentBarChart({

    applications

}) {

    const stats = {};

    applications.forEach(app => {

        stats[app.employmentType] =
            (stats[app.employmentType] || 0) + 1;

    });

    const data = Object.keys(stats).map(key => ({

        employment: key,

        count: stats[key]

    }));

    return (

        <div className="bg-slate-900 rounded-xl p-8">

            <h2 className="text-2xl text-cyan-400 font-bold mb-6">

                Employment Distribution

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <BarChart data={data}>

                    <XAxis dataKey="employment"/>

                    <YAxis/>

                    <Tooltip/>

                    <Bar
                        dataKey="count"
                        fill="#06b6d4"
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default EmploymentBarChart;