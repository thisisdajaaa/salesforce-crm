import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CaseTabs from "./components/CaseTabs";
import CaseDetails from "./components/CaseDetails";
import CaseFeed from "./components/CaseFeed";
import KnowledgePanel from "./components/KnowledgePanel";
import "./index.css";

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <CaseTabs />
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex flex-col overflow-hidden border-r border-gray-300">
              <CaseDetails />
            </div>
            <div className="flex-1 flex flex-col overflow-hidden border-r border-gray-300">
              <CaseFeed />
            </div>
            <div className="w-1/4 flex flex-col overflow-hidden">
              <KnowledgePanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
