import { useNavigate } from "react-router-dom";
function LandingPage() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-cyan-400">
          FlowSense AI
        </h1>

        <button
  onClick={() => navigate("/apply")}
  className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold transition"
>
  Apply Now
</button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h2 className="text-6xl font-extrabold leading-tight">
          AI Powered <br />
          Loan Journey Analytics
        </h2>

        <p className="mt-6 max-w-3xl text-xl text-slate-300">
          Understand customer drop-offs, optimize loan journeys,
          and improve conversions using AI-powered insights.
        </p>

        <button
  onClick={() => navigate("/apply")}
  className="mt-10 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-bold transition"
>
  Start Application
</button>

      </section>

    </div>
  );
}

export default LandingPage;