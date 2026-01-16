import { useState } from "react";
import { Camera, Info, MapPin } from "lucide-react";
import DriverView from "./components/DriverView";
import HistoricalSights from "./components/HistoricalSights";
import MapView from "./components/MapView";

type ViewType = "driver" | "sights" | "map";

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>("driver");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="berlin-tour-sidebar w-64 bg-gray-900 text-white flex flex-col">
        <div className="berlin-tour-header p-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold">Berlin Bus Tour</h1>
          <p className="text-gray-400 text-sm mt-1">Interactive Display</p>
        </div>
        
        <nav className="berlin-tour-nav flex-1 p-4">
          <button
            onClick={() => setActiveView("driver")}
            className={`berlin-tour-nav-button w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeView === "driver"
                ? "berlin-tour-nav-button-active bg-blue-600 text-white"
                : "berlin-tour-nav-button-inactive text-gray-300 hover:bg-gray-800"
            }`}
          >
            <Camera className="w-5 h-5" />
            <span>Driver View</span>
          </button>
          
          <button
            onClick={() => setActiveView("sights")}
            className={`berlin-tour-nav-button w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeView === "sights"
                ? "berlin-tour-nav-button-active bg-blue-600 text-white"
                : "berlin-tour-nav-button-inactive text-gray-300 hover:bg-gray-800"
            }`}
          >
            <Info className="w-5 h-5" />
            <span>Historical Sights</span>
          </button>
          
          <button
            onClick={() => setActiveView("map")}
            className={`berlin-tour-nav-button w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeView === "map"
                ? "berlin-tour-nav-button-active bg-blue-600 text-white"
                : "berlin-tour-nav-button-inactive text-gray-300 hover:bg-gray-800"
            }`}
          >
            <MapPin className="w-5 h-5" />
            <span>Map & Directions</span>
          </button>
        </nav>
        
        <div className="berlin-tour-footer p-4 border-t border-gray-800 text-sm text-gray-400">
          <p>Welcome to Berlin</p>
          <p className="mt-1">Explore the city's history</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="berlin-tour-main flex-1 overflow-auto">
        {activeView === "driver" && <DriverView />}
        {activeView === "sights" && <HistoricalSights />}
        {activeView === "map" && <MapView />}
      </main>
    </div>
  );
}