import { useState } from "react";
import { Play, Pause, Camera } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function DriverView() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white border-b px-8 py-6">
        <h2 className="text-3xl font-bold text-gray-900">Driver's View</h2>
        <p className="text-gray-600 mt-2">
          Live view from the front of the bus
        </p>
      </div>

      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Video Feed Simulation */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <ImageWithFallback
                src="road_view.jpg"
                alt="Driver's view from the bus"
                className="w-full h-full object-cover"
              />
              
              {/* Live indicator */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold">LIVE</span>
              </div>

              {/* Camera info overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    <span className="text-sm">Front Camera - HD 1080p</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-black/70 backdrop-blur-sm hover:bg-black/80 text-white p-3 rounded-lg transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-gray-600 text-sm font-medium mb-2">Current Speed</h3>
              <p className="text-3xl font-bold text-blue-600">45 km/h</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-gray-600 text-sm font-medium mb-2">Next Stop</h3>
              <p className="text-xl font-bold text-gray-900">Brandenburg Gate</p>
              <p className="text-sm text-gray-500 mt-1">In 3 minutes</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-gray-600 text-sm font-medium mb-2">Route Progress</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-green-600">60%</p>
                <p className="text-sm text-gray-500">Complete</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">About Driver View</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              This view shows a live feed from the front-facing camera mounted on the bus. 
              Passengers can enjoy seeing the road ahead and get a driver's perspective of 
              navigating through Berlin's historic streets. The feed updates in real-time 
              as the bus moves through the city.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
