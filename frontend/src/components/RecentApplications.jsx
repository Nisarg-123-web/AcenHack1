import { useMemo, useState } from "react";

function RecentApplications({ applications }) {

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 5;

    const filteredApplications = useMemo(() => {

        return applications.filter(app =>
            (app.fullName || "")
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    }, [applications, search]);

    const totalPages = Math.ceil(filteredApplications.length / pageSize);

    const currentApplications = filteredApplications.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const getStatusColor = (status) => {

        switch (status) {

            case "APPROVED":
                return "bg-green-500";

            case "REJECTED":
                return "bg-red-500";

            default:
                return "bg-yellow-500";

        }

    };

    const getPredictionColor = (prediction) => {

        if (prediction === "Y")
            return "bg-green-500";

        return "bg-red-500";

    };

    return (

        <div className="bg-slate-900 rounded-2xl shadow-lg p-8">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold text-cyan-400">

                    Recent Applications

                </h2>

                <input

                    value={search}

                    onChange={(e) => {

                        setSearch(e.target.value);
                        setCurrentPage(1);

                    }}

                    placeholder="Search Applicant..."

                    className="bg-slate-800 rounded-lg px-4 py-2 text-white outline-none w-72"

                />

            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="border-b border-slate-700 text-slate-400">

                            <th className="py-4 text-left">Applicant</th>
                            <th className="text-left">Employment</th>
                            <th className="text-left">Income</th>
                            <th className="text-left">Loan</th>
                            <th className="text-left">Prediction</th>
                            <th className="text-left">Probability</th>
                            <th className="text-left">Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            currentApplications.map(app => (

                                <tr

                                    key={app.id}

                                    className="border-b border-slate-800 hover:bg-slate-800 transition"

                                >

                                    <td className="py-4 font-medium text-white">

                                        {app.fullName}

                                    </td>

                                    <td>

                                        {app.employmentType}

                                    </td>

                                    <td>

                                        ₹ {(app.monthlyIncome || 0).toLocaleString("en-IN")}

                                    </td>

                                    <td>

                                        ₹ {(app.loanAmount || 0).toLocaleString("en-IN")}

                                    </td>

                                    <td>

                                        <span className={`${getPredictionColor(app.prediction)} px-3 py-1 rounded-full text-white text-sm`}>

                                            {app.prediction === "Y"
                                                ? "Approved"
                                                : "Rejected"}

                                        </span>

                                    </td>

                                    <td>

                                        <div className="w-32">

                                            <div className="bg-slate-700 rounded-full h-3">

                                                <div

                                                    className="bg-cyan-500 h-3 rounded-full"

                                                    style={{

                                                        width: `${app.probability || 0}%`

                                                    }}

                                                />

                                            </div>

                                            <p className="text-sm mt-1">

                                                {app.probability || 0}%

                                            </p>

                                        </div>

                                    </td>

                                    <td>

                                        <span className={`${getStatusColor(app.status)} px-3 py-1 rounded-full text-white text-sm`}>

                                            {app.status}

                                        </span>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

            <div className="flex justify-end gap-3 mt-6">

                <button

                    disabled={currentPage === 1}

                    onClick={() => setCurrentPage(currentPage - 1)}

                    className="bg-slate-800 px-4 py-2 rounded-lg disabled:opacity-50"

                >

                    Previous

                </button>

                <span className="flex items-center">

                    {currentPage} / {totalPages || 1}

                </span>

                <button

                    disabled={currentPage === totalPages || totalPages === 0}

                    onClick={() => setCurrentPage(currentPage + 1)}

                    className="bg-slate-800 px-4 py-2 rounded-lg disabled:opacity-50"

                >

                    Next

                </button>

            </div>

        </div>

    );

}

export default RecentApplications;