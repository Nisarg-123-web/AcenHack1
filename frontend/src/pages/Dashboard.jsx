import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardFilters from "../components/DashboardFilters";

import DashboardCards from "../components/DashboardCards";
import JourneyFunnel from "../components/JourneyFunnel";

import ApplicationTrendChart from "../components/ApplicationTrendChart";
import PredictionPieChart from "../components/PredictionPieChart";
import EmploymentBarChart from "../components/EmploymentBarChart";

import RiskAnalysisCard from "../components/RiskAnalysisCard";
import DropOffAnalysis from "../components/DropOffAnalysis";
import CustomerSegmentCard from "../components/CustomerSegmentCard";

import IncomeStatistics from "../components/IncomeStatistics";
import LoanStatistics from "../components/LoanStatistics";
import ApprovalGauge from "../components/ApprovalGauge";

import ExecutiveSummary from "../components/ExecutiveSummary";
import BusinessRecommendation from "../components/BusinessRecommendation";
import AIInsightCard from "../components/AIInsightCard";
import RecentApplications from "../components/RecentApplications";

import {
    getAnalytics,
    getDashboardSummary,
    getApplications,
    getJourneyEvents
} from "../services/dashboardService";

function Dashboard() {

    const [analytics, setAnalytics] = useState(null);
    const [summary, setSummary] = useState(null);
    const [applications, setApplications] = useState([]);
    const [events, setEvents] = useState([]);

    const [filters, setFilters] = useState({
        employment: "All",
        status: "All",
        search: ""
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const [
                analyticsData,
                summaryData,
                applicationsData,
                eventsData
            ] = await Promise.all([
                getAnalytics(),
                getDashboardSummary(),
                getApplications(),
                getJourneyEvents()
            ]);

            setAnalytics(analyticsData);
            setSummary(summaryData);
            setApplications(applicationsData);
            setEvents(eventsData);

        } catch (error) {

            console.error(error);

        }

    };

    if (!analytics || !summary) {

        return (

            <div className="min-h-screen bg-slate-950 flex items-center justify-center">

                <h1 className="text-white text-3xl">

                    Loading Dashboard...

                </h1>

            </div>

        );

    }

    /* ===============================
       FILTERED APPLICATIONS
    =============================== */

    const filteredApplications = applications.filter(app => {

        const employmentMatch =
            filters.employment === "All" ||
            app.employmentType === filters.employment;

        const statusMatch =
            filters.status === "All" ||
            app.status === filters.status;

        const searchMatch =
            (app.fullName || "")
                .toLowerCase()
                .includes(filters.search.toLowerCase());

        return (
            employmentMatch &&
            statusMatch &&
            searchMatch
        );

    });

    /* ===============================
       FILTERED ANALYTICS
    =============================== */

    const filteredAnalytics = {

        totalApplications: filteredApplications.length,

        submittedApplications:
            filteredApplications.filter(
                app => app.status === "SUBMITTED"
            ).length,

        droppedApplications:
            filteredApplications.filter(
                app => app.status === "DROPPED"
            ).length,

        conversionRate:
            filteredApplications.length === 0
                ? 0
                : (
                    filteredApplications.filter(
                        app => app.prediction === "Y"
                    ).length /
                    filteredApplications.length
                ) * 100

    };

    /* ===============================
       FILTERED SUMMARY
    =============================== */

    const filteredSummary = {

        approvalRate:
            filteredApplications.length === 0
                ? 0
                : (
                    filteredApplications.filter(
                        app => app.prediction === "Y"
                    ).length /
                    filteredApplications.length
                ) * 100,

        averageIncome:
            filteredApplications.length === 0
                ? 0
                : filteredApplications.reduce(
                    (sum, app) => sum + (app.monthlyIncome || 0),
                    0
                ) / filteredApplications.length,

        averageLoan:
            filteredApplications.length === 0
                ? 0
                : filteredApplications.reduce(
                    (sum, app) => sum + (app.loanAmount || 0),
                    0
                ) / filteredApplications.length,

        averageProbability:
            filteredApplications.length === 0
                ? 0
                : filteredApplications.reduce(
                    (sum, app) => sum + (app.probability || 0),
                    0
                ) / filteredApplications.length,

        bestEmployment:
            summary.bestEmployment,

        highestDropStep:
            summary.highestDropStep,

        dropRate:
            summary.dropRate,

        recommendation:
            summary.recommendation

    };

    return (

        <DashboardLayout

            sidebar={<Sidebar />}

            header={
    <DashboardHeader
        analytics={filteredAnalytics}
        summary={filteredSummary}
        applications={filteredApplications}
        onRefresh={loadDashboard}
    />
}

        >

            <DashboardFilters

                filters={filters}

                setFilters={setFilters}

            />

            <DashboardCards analytics={filteredAnalytics} />

            <div className="mt-8">

                <JourneyFunnel events={events} />

            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">

                <ApplicationTrendChart
                    applications={filteredApplications}
                />

                <PredictionPieChart
                    applications={filteredApplications}
                />

            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">

                <EmploymentBarChart
                    applications={filteredApplications}
                />

                <RiskAnalysisCard
                    applications={filteredApplications}
                />

            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">

                <DropOffAnalysis
                    summary={filteredSummary}
                />

                <CustomerSegmentCard
                    summary={filteredSummary}
                />

            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">

                <IncomeStatistics
                    summary={filteredSummary}
                />

                <LoanStatistics
                    summary={filteredSummary}
                />

            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">

                <ApprovalGauge
                    summary={filteredSummary}
                />

                <ExecutiveSummary
                    summary={filteredSummary}
                />

            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">

                <BusinessRecommendation
                    summary={filteredSummary}
                />

                <AIInsightCard
                    analytics={filteredAnalytics}
                />

            </div>

            <div className="mt-8">

                <RecentApplications
                    applications={filteredApplications}
                />

            </div>

        </DashboardLayout>

    );

}

export default Dashboard;