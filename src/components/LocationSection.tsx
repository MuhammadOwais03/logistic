import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, ArrowRight, Phone } from "lucide-react";
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
  const position = [24.8747312, 67.0763241];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

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
          <motion.div
            className="text-center mb-6 sm:mb-8 lg:mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Find Us
              </span>
            </motion.div>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900"
              variants={itemVariants}
            >
              Visit Our Office
            </motion.h2>

            <motion.p
              className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-4"
              variants={itemVariants}
            >
              Located in the heart of the business district, our office is
              easily accessible and equipped with modern facilities to serve
              your logistics needs.
            </motion.p>
          </motion.div>

          {/* Map and Info Card */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Map Container */}
            <motion.div
              className="h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden relative"
              variants={mapVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
                  <Popup>
                    Address: Z-102, Ground Floor, Block-7 & 8, Shaheed-e-
                    Millat, Karachi.
                  </Popup>
                </Marker>
              </MapContainer>
            </motion.div>

            {/* Info Section */}
            <motion.div
              className="text-center relative z-10 mt-4 sm:mt-6 px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Animated Icon */}
              <motion.div
                className="text-center"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    {/* Outer ring with enhanced animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-yellow-400"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Secondary pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-orange-400"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />

                    {/* Inner container */}
                    <motion.div
                      className="absolute inset-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.6 },
                      }}
                    >
                      <MapPin className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Center pulse */}
                    <motion.div
                      className="absolute inset-6 bg-white/30 rounded-full"
                      animate={{
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Location Details */}
              <motion.h3
                className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Our Location
              </motion.h3>

              <motion.p
                className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Address: Z-102, Ground Floor,
                <br />
                Block-7 & 8, Shaheed-e- Millat, Karachi.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.a
                  href="https://www.google.com/maps/dir/?api=1&destination=D-14+Block,Gulshan-e-Iqbal,Karachi,Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 sm:h-10 px-4 sm:px-5 border border-primary hover:border-primary-300 text-primary font-medium rounded-lg flex items-center justify-center transition-all duration-200 text-sm sm:text-base"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Get Directions
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </motion.a>

                <motion.a
                  href="tel:+922134305577"
                  className="h-9 sm:h-10 px-4 sm:px-5 text-gray-600 hover:text-primary hover:bg-primary/10 font-medium rounded-lg flex items-center justify-center transition-all duration-200 text-sm sm:text-base"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  (021) 3430 5577
                  <Phone className="ml-2 w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
