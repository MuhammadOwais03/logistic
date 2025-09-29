import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, ArrowRight, Phone } from "lucide-react"; // Assuming Lucide icons are used
import L from "leaflet";


// Fix for default marker icon in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const LocationSection = () => {
  // Coordinates for 123 Logistics Avenue, New York, NY 10001 (approximate)
  const position = [24.91351, 67.08265];

  //24.89711671795686, 67.07179243456788
  //24.897085089753528, 67.071769635792

  return (
    <section className="bg-gray-100 relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full mb-4">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Find Us
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              Visit Our Office
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Located in the heart of the business district, our office is
              easily accessible and equipped with modern facilities to serve
              your logistics needs.
            </p>
          </div>

          {/* Map and Info Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20">
            <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden relative">
              <MapContainer
                center={position}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
                className="z-10"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>D-14 Block, Gulshan e Iqbal, Karachi, Pakistan</Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Info Section */}
            <div className="text-center relative z-10 mt-4 sm:mt-6 px-4">
              {/* <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br  from-primary to-primary-hover rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 icon-float">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div> */}
              {/* Double Ring Design */}
          <div className="text-center">
            <div className="relative group">
              <div className="relative w-20 h-20 mx-auto mb-6">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r border-yellow-400 opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 animate-ping"></div>
                {/* Inner container */}
                <div className="absolute inset-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                {/* Center pulse */}
                <div className="absolute inset-6 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              </div>
              
            </div>
          </div>

              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                Our Location
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                D-14 Block, Gulshan e Iqbal,
                <br />
                Karachi, Pakistan
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=D-14+Block,Gulshan-e-Iqbal,Karachi,Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 sm:h-10 px-4 sm:px-5 border border-primary hover:border-primary-300 text-primary font-medium rounded-lg flex items-center justify-center transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
                >
                  Get Directions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="tel:+922134981234"
                  className="h-9 sm:h-10 px-4 sm:px-5 text-gray-600 hover:text-primary hover:bg-primary/10 font-medium rounded-lg flex items-center justify-center transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
                >
                  Call Now
                  <Phone className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
