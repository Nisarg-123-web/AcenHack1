function DashboardFilters({

    filters,

    setFilters

}) {

    const handleChange = (e) => {

        setFilters({

            ...filters,

            [e.target.name]: e.target.value

        });

    };

    return (

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg mb-8">

            <div className="grid grid-cols-4 gap-5">

                <select

                    name="employment"

                    value={filters.employment}

                    onChange={handleChange}

                    className="bg-slate-800 rounded-lg p-3"

                >

                    <option value="All">

                        All Employment

                    </option>

                    <option value="Salaried">

                        Salaried

                    </option>

                    <option value="Business">

                        Business

                    </option>

                    <option value="Self Employed">

                        Self Employed

                    </option>

                </select>

                <select

                    name="status"

                    value={filters.status}

                    onChange={handleChange}

                    className="bg-slate-800 rounded-lg p-3"

                >

                    <option value="All">

                        All Status

                    </option>

                    <option value="APPROVED">

                        Approved

                    </option>

                    <option value="PENDING">

                        Pending

                    </option>

                    <option value="REJECTED">

                        Rejected

                    </option>

                </select>

                <input

                    type="text"

                    name="search"

                    value={filters.search}

                    onChange={handleChange}

                    placeholder="Search Applicant"

                    className="bg-slate-800 rounded-lg p-3"

                />

                <button

                    onClick={() =>
                        setFilters({

                            employment: "All",

                            status: "All",

                            search: ""

                        })
                    }

                    className="bg-cyan-600 rounded-lg"

                >

                    Reset Filters

                </button>

            </div>

        </div>

    );

}

export default DashboardFilters;