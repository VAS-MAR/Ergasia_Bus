import { useState } from "react";
import { MapPin, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Sight {
  id: number;
  name: string;
  image: string;
  description: string;
  yearBuilt: string;
  visitorsPerYear: string;
  funFact: string;
  location: string;
}

const sights: Sight[] = [
  {
    id: 1,
    name: "Brandenburg Gate",
    image: "brandenburg_gate.jpg",
    description: "The Brandenburg Gate is an 18th-century neoclassical monument, built on the orders of Prussian king Frederick William II. It's one of the most iconic landmarks in Germany and a symbol of German reunification.",
    yearBuilt: "1791",
    visitorsPerYear: "10 million+",
    funFact: "The gate was once part of a wall that divided Berlin during the Cold War.",
    location: "Pariser Platz, 10117 Berlin"
  },
  {
    id: 2,
    name: "Berlin TV Tower",
    image: "berlin_tower.jpg",
    description: "Standing at 368 meters tall, the Fernsehturm (TV Tower) is the tallest structure in Germany. It offers panoramic views of Berlin from its observation deck and rotating restaurant.",
    yearBuilt: "1969",
    visitorsPerYear: "1.2 million",
    funFact: "On sunny days, sunlight creates a cross reflection on the tower's sphere, nicknamed 'Pope's Revenge' by Berliners.",
    location: "Panoramastraße 1A, 10178 Berlin"
  },
  {
    id: 3,
    name: "Berlin Cathedral",
    image: "berlin_cathedral.jpg",
    description: "The Berlin Cathedral (Berliner Dom) is a magnificent Baroque-style Protestant cathedral located on Museum Island. Its stunning dome and ornate interior make it one of Berlin's most beautiful buildings.",
    yearBuilt: "1905",
    visitorsPerYear: "800,000",
    funFact: "The cathedral's dome walkway offers one of the best views of central Berlin, accessible by climbing 270 steps.",
    location: "Am Lustgarten, 10178 Berlin"
  },
  {
    id: 4,
    name: "Reichstag Building",
    image: "reichstag.jpg",
    description: "The Reichstag is the historic seat of the German parliament (Bundestag). Its modern glass dome, designed by Norman Foster, symbolizes transparency in government and offers spectacular city views.",
    yearBuilt: "1894 (Dome rebuilt 1999)",
    visitorsPerYear: "3 million",
    funFact: "The words 'Dem Deutschen Volke' (To the German People) were added to the building in 1916 using melted-down French cannons from the Napoleonic Wars.",
    location: "Platz der Republik 1, 11011 Berlin"
  }
];

export default function HistoricalSights() {
  const [selectedSight, setSelectedSight] = useState<Sight>(sights[0]);

  return (
    <div className="h-full flex bg-gray-50">
      {/* Sight Selection Panel */}
      <div className="w-96 bg-white border-r overflow-y-auto">
        <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700">
          <h2 className="text-2xl font-bold text-white">Historical Sights</h2>
          <p className="text-blue-100 text-sm mt-1">
            Explore Berlin's landmarks
          </p>
        </div>
        
        <div className="p-4">
          {sights.map((sight) => (
            <button
              key={sight.id}
              onClick={() => setSelectedSight(sight)}
              className={`w-full mb-3 rounded-xl overflow-hidden transition-all ${
                selectedSight.id === sight.id
                  ? "ring-4 ring-blue-500 shadow-lg scale-[1.02]"
                  : "hover:shadow-md hover:scale-[1.01]"
              }`}
            >
              <div className="aspect-video relative">
                <ImageWithFallback
                  src={sight.image}
                  alt={sight.name}
                  className="w-full h-full object-cover"
                />
                {selectedSight.id === sight.id && (
                  <div className="absolute inset-0 bg-blue-600/20"></div>
                )}
              </div>
              <div className="p-4 text-left bg-white">
                <h3 className="font-semibold text-gray-900">{sight.name}</h3>
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Berlin Landmark
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-[16/9] relative">
              <ImageWithFallback
                src={selectedSight.image}
                alt={selectedSight.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-2">{selectedSight.name}</h1>
                <p className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-4 h-4" />
                  {selectedSight.location}
                </p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {selectedSight.description}
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Year Built</h3>
                  <p className="text-2xl font-bold text-gray-900">{selectedSight.yearBuilt}</p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 text-center">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Annual Visitors</h3>
                  <p className="text-2xl font-bold text-gray-900">{selectedSight.visitorsPerYear}</p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Stop #{selectedSight.id}</h3>
                  <p className="text-xl font-bold text-gray-900">Tour Route</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-r-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">💡</span> Fun Fact
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedSight.funFact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
