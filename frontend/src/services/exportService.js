import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

/* ==========================
   Export PDF
========================== */

export const exportPDF = (
    analytics,
    summary,
    applications
) => {

    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("FlowSense AI Dashboard Report", 14, 18);

    doc.setFontSize(12);

    doc.text(
        `Generated: ${new Date().toLocaleString()}`,
        14,
        28
    );

    doc.text("Dashboard Summary", 14, 40);

    autoTable(doc, {

        startY: 46,

        body: [

            [
                "Applications",
                analytics.totalApplications
            ],

            [
                "Submitted",
                analytics.submittedApplications
            ],

            [
                "Dropped",
                analytics.droppedApplications
            ],

            [
                "Conversion",
                `${analytics.conversionRate.toFixed(1)}%`
            ],

            [
                "Approval Rate",
                `${summary.approvalRate.toFixed(1)}%`
            ],

            [
                "Average Income",
                `₹ ${summary.averageIncome.toLocaleString()}`
            ],

            [
                "Average Loan",
                `₹ ${summary.averageLoan.toLocaleString()}`
            ],

            [
                "Recommendation",
                summary.recommendation
            ]

        ]

    });

    autoTable(doc, {

        startY: doc.lastAutoTable.finalY + 15,

        head: [[

            "Applicant",

            "Employment",

            "Income",

            "Loan",

            "Prediction",

            "Status"

        ]],

        body: applications.map(app => [

            app.fullName,

            app.employmentType,

            app.monthlyIncome,

            app.loanAmount,

            app.prediction,

            app.status

        ])

    });

    doc.save("FlowSenseAI_Report.pdf");

};

/* ==========================
   Export Excel
========================== */

export const exportExcel = (
    applications
) => {

    const worksheet = XLSX.utils.json_to_sheet(

        applications.map(app => ({

            Applicant: app.fullName,

            Email: app.email,

            Employment: app.employmentType,

            Income: app.monthlyIncome,

            Loan: app.loanAmount,

            Prediction: app.prediction,

            Probability: app.probability,

            Status: app.status

        }))

    );

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "Applications"
    );

    XLSX.writeFile(
        workbook,
        "FlowSenseAI.xlsx"
    );

};

/* ==========================
   Export CSV
========================== */

export const exportCSV = (
    applications
) => {

    const worksheet = XLSX.utils.json_to_sheet(

        applications.map(app => ({

            Applicant: app.fullName,

            Email: app.email,

            Employment: app.employmentType,

            Income: app.monthlyIncome,

            Loan: app.loanAmount,

            Prediction: app.prediction,

            Probability: app.probability,

            Status: app.status

        }))

    );

    const csv = XLSX.utils.sheet_to_csv(
        worksheet
    );

    const blob = new Blob(
        [csv],
        {
            type: "text/csv;charset=utf-8;"
        }
    );

    saveAs(
        blob,
        "FlowSenseAI.csv"
    );

};