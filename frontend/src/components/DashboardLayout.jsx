function DashboardLayout({ sidebar, header, children }) {

    return (

        <div className="min-h-screen bg-slate-950 flex">

            {sidebar}

            <div className="flex-1 flex flex-col">

                {header}

                <main className="p-8 overflow-y-auto">

                    {children}

                </main>

            </div>

        </div>

    );

}

export default DashboardLayout;