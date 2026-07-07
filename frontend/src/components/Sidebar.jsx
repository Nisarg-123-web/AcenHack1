import {
    LayoutDashboard,
    FileText,
    BarChart3,
    BrainCircuit,
    Settings
} from "lucide-react";

function Sidebar() {

    const menus = [

        {
            title: "Dashboard",
            icon: <LayoutDashboard size={20} />
        },

        {
            title: "Applications",
            icon: <FileText size={20} />
        },

        {
            title: "Analytics",
            icon: <BarChart3 size={20} />
        },

        {
            title: "AI Insights",
            icon: <BrainCircuit size={20} />
        },

        {
            title: "Settings",
            icon: <Settings size={20} />
        }

    ];

    return (

        <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">

            <div className="p-8">

                <h1 className="text-3xl font-bold text-cyan-400">

                    FlowSense AI

                </h1>

                <p className="text-slate-400 mt-2">

                    Loan Intelligence

                </p>

            </div>

            <nav className="flex-1 px-4">

                {

                    menus.map(menu => (

                        <button

                            key={menu.title}

                            className="w-full flex items-center gap-3 px-5 py-4 rounded-xl mb-3 hover:bg-slate-800 text-slate-300 hover:text-white transition"

                        >

                            {menu.icon}

                            {menu.title}

                        </button>

                    ))

                }

            </nav>

        </aside>

    );

}

export default Sidebar;