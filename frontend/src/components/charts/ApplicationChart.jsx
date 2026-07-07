import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

function ApplicationChart({ applications }) {

  const data = [
    {
      name: "Applications",
      value: applications.length
    }
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Loan Applications
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#06b6d4"
            radius={[10,10,0,0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ApplicationChart;