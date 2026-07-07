import { useEffect, useState } from "react";
import { getJourneyEvents } from "../services/applicationService";

function JourneyFunnel() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        try {
            const data = await getJourneyEvents();
            setEvents(data);
        } catch (error) {
            console.error(error);
        }
    };

    const personal = events.filter(
        e => e.stepNumber === 1
    ).length;

    const profile = events.filter(
        e => e.stepNumber === 2
    ).length;

    const employment = events.filter(
        e => e.stepNumber === 3
    ).length;

    const loan = events.filter(
        e => e.stepNumber === 4
    ).length;

    const submitted = events.filter(
        e => e.eventName === "Application Submitted"
    ).length;

    const max = Math.max(
        personal,
        profile,
        employment,
        loan,
        submitted,
        1
    );

    const steps = [

        {
            title: "Personal Details",
            value: personal
        },

        {
            title: "Profile Details",
            value: profile
        },

        {
            title: "Employment Details",
            value: employment
        },

        {
            title: "Loan Details",
            value: loan
        },

        {
            title: "Application Submitted",
            value: submitted
        }

    ];

    return (

        <div className="bg-slate-900 rounded-2xl shadow-lg p-8 mt-8">

            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
                Customer Journey Funnel
            </h2>

            <div className="space-y-8">

                {

                    steps.map((step) => {

                        const percentage =
                            ((step.value / max) * 100).toFixed(0);

                        const dropOff =
                            max - step.value;

                        return (

                            <div key={step.title}>

                                <div className="flex justify-between mb-2">

                                    <div>

                                        <h3 className="text-white font-semibold">
                                            {step.title}
                                        </h3>

                                        <p className="text-sm text-slate-400">
                                            Drop-off : {dropOff}
                                        </p>

                                    </div>

                                    <div className="text-right">

                                        <p className="text-cyan-400 font-bold">
                                            {step.value}
                                        </p>

                                        <p className="text-slate-400 text-sm">
                                            {percentage}%
                                        </p>

                                    </div>

                                </div>

                                <div className="w-full bg-slate-800 rounded-full h-5">

                                    <div
                                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-5 rounded-full transition-all duration-700"
                                        style={{
                                            width: `${percentage}%`
                                        }}
                                    ></div>

                                </div>

                            </div>

                        );

                    })

                }

            </div>

        </div>

    );

}

export default JourneyFunnel;