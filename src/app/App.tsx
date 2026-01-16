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
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold">Berlin Bus Tour</h1>
          <p className="text-gray-400 text-sm mt-1">Interactive Display</p>
        </div>
        
        <nav className="flex-1 p-4">
          <button
            onClick={() => setActiveView("driver")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeView === "driver"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <Camera className="w-5 h-5" />
            <span>Driver View</span>
          </button>
          
          <button
            onClick={() => setActiveView("sights")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeView === "sights"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <Info className="w-5 h-5" />
            <span>Historical Sights</span>
          </button>
          
          <button
            onClick={() => setActiveView("map")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeView === "map"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <MapPin className="w-5 h-5" />
            <span>Map & Directions</span>
          </button>
        </nav>
        
        <div className="p-4 border-t border-gray-800 text-sm text-gray-400">
          <p>Welcome to Berlin</p>
          <p className="mt-1">Explore the city's history</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {activeView === "driver" && <DriverView />}
        {activeView === "sights" && <HistoricalSights />}
        {activeView === "map" && <MapView />}
      </main>
    </div>
  );
}
