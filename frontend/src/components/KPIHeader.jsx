function KPIHeader({ analytics }) {

    if (!analytics) return null;

    return (

        <div className="grid grid-cols-5 gap-6 mb-8">

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6">

                <h3 className="text-white">
                    Applications
                </h3>

                <h1 className="text-4xl font-bold text-white mt-3">

                    {analytics.totalApplications}

                </h1>

            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-xl p-6">

                <h3 className="text-white">

                    Submitted

                </h3>

                <h1 className="text-4xl font-bold text-white mt-3">

                    {analytics.submittedApplications}

                </h1>

            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-400 rounded-xl p-6">

                <h3 className="text-white">

                    Dropped

                </h3>

                <h1 className="text-4xl font-bold text-white mt-3">

                    {analytics.droppedApplications}

                </h1>

            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-6">

                <h3 className="text-white">

                    Conversion

                </h3>

                <h1 className="text-4xl font-bold text-white mt-3">

                    {analytics.conversionRate.toFixed(1)}%

                </h1>

            </div>

            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-6">

                <h3 className="text-white">

                    Journey Score

                </h3>

                <h1 className="text-4xl font-bold text-white mt-3">

                    {Math.round(
                        analytics.conversionRate * 1.2
                    )}

                </h1>

            </div>

        </div>

    );

}

export default KPIHeader;