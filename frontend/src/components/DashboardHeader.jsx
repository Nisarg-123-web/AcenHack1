import { useEffect, useState } from "react";

import {
    exportPDF,
    exportExcel,
    exportCSV
} from "../services/exportService";

function DashboardHeader({

    analytics,

    summary,

    applications,

    onRefresh

}) {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {

            setCurrentTime(new Date());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <header className="bg-slate-900 rounded-xl px-8 py-6 shadow-lg border border-slate-800 mb-8">

            <div className="flex justify-between items-center flex-wrap gap-6">

                {/* Left */}

                <div>

                    <h1 className="text-4xl font-bold text-cyan-400">

                        FlowSense AI Dashboard

                    </h1>

                    <p className="text-slate-400 mt-2">

                        AI Powered Loan Analytics Platform

                    </p>

                </div>

                {/* Right */}

                <div className="flex flex-wrap items-center gap-3">

                    <div className="bg-slate-800 px-4 py-2 rounded-lg">

                        📅 {currentTime.toLocaleDateString()}

                    </div>

                    <div className="bg-slate-800 px-4 py-2 rounded-lg text-green-400">

                        ⏰ {currentTime.toLocaleTimeString()}

                    </div>

                    <button

                        onClick={onRefresh}

                        className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition"

                    >

                        🔄 Refresh

                    </button>

                    <button

                        onClick={() =>
                            exportPDF(
                                analytics,
                                summary,
                                applications
                            )
                        }

                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"

                    >

                        📄 PDF

                    </button>

                    <button

                        onClick={() =>
                            exportExcel(
                                applications
                            )
                        }

                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"

                    >

                        📊 Excel

                    </button>

                    <button

                        onClick={() =>
                            exportCSV(
                                applications
                            )
                        }

                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"

                    >

                        📑 CSV

                    </button>

                    <button

                        className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg"

                    >

                        🔔

                    </button>

                    <div className="bg-slate-800 px-4 py-2 rounded-lg">

                        👤 Admin

                    </div>

                </div>

            </div>

        </header>

    );

}

export default DashboardHeader;