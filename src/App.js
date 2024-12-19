import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProgressSteps from "./components/ProgressSteps";
import ClaimForm from "./components/ClaimForm";
import MyCases from "./pages/MyCases";
import Activities from "./pages/Activities";
import Calendar from "./pages/Calendar";
import Files from "./pages/Files";
import OpenDispute from "./pages/OpenDispute";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex bg-gray-50 font-poppins">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="mb-6">
                    <ProgressSteps />
                  </div>
                  <ClaimForm />
                </>
              }
            />
            <Route path="/my-cases" element={<MyCases />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/files" element={<Files />} />
            <Route path="/open-dispute" element={<OpenDispute />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
