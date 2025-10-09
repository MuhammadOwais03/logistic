import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Package,
  Ship,
  Plane,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Thermometer,
  AlertTriangle,
  Brain,
  Leaf,
  Network,
  Sparkles,
} from "lucide-react";
import warehouseBg from "@/assets/warehouse-bg.jpg";
import globalNetwork from "@/assets/global-network.jpg";

const SERVICES = [
  {
    icon: Ship,
    title: "Sea Freight",
    description: "With unwavering dedication to precision, reliability, and cost-efficiency, we offer tailored solutions that ensure the seamless transportation of your goods across oceans.",
    features: [
      "Full container load (FCL) & Less than container load (LCL)",
      "Port-to-port or door-to-door service",
      "Cargo insurance",
      "Documentation support",
    ],
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "We excel in providing top-tier air freight solutions that propel your business to new heights. Our dedicated team, extensive network, and cutting-edge technology.",
    features: [
      "Express delivery",
      "Temperature controlled",
      "Priority handling",
      "24/7 shipment monitoring",
    ],
  },
  {
    icon: Thermometer,
    title: "Reefer Cargo",
    description: "Refrigerated cargo logistics is all about precision – Customers need commodity expertise, seamless handovers, flexible temperature control.",
    features: [
      "Temperature-controlled logistics",
      "Commodity expertise",
      "Flexible handovers",
      "Real-time temperature monitoring",
    ],
  },
  {
    icon: Shield,
    title: "Custom Brokerage",
    description: "We are an authorized customs clearance company in Pakistan, specializing in streamlining the intricate processes involved in international trade.",
    features: [
      "Authorized customs clearance",
      "Trade compliance support",
      "Documentation management",
      "Duty & tax consultation",
    ],
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "We provide tailored warehousing solutions to boost your business's productivity and efficiency. With a strategically located 62,000 sq. ft. facility.",
    features: [
      "Climate controlled storage",
      "Inventory management",
      "Pick & pack services",
      "Strategic distribution network",
    ],
  },
  {
    icon: Truck,
    title: "Global Transportation",
    description: "Our primary objective for door-to-door delivery is to seamlessly collect cargo from the shipper's location and deliver it directly to the consignee.",
    features: [
      "Door-to-door delivery",
      "Multi-modal transport",
      "Cargo tracking",
      "Competitive rates",
    ],
  },
  {
    icon: Truck,
    title: "Project Cargo",
    description: "At Project & Energy Services, we excel in delivering comprehensive logistics project management, crafting creative and cost-effective solutions.",
    features: [
      "Project management",
      "Heavy & oversized cargo handling",
      "Customized solutions",
      "Cost-effective logistics",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Hazardous Cargo",
    description: "With a wealth of expertise and knowledge inherited since our company's inception, Seagate Logistics has consistently earned the trust of clients.",
    features: [
      "Hazmat handling",
      "Safety & compliance",
      "Specialized equipment",
      "Experienced team",
    ],
  },
];

const ADDITIONAL_SERVICES = [
  {
    title: "AI-Powered Analytics",
    description: "Advanced analytics and machine learning to optimize routes, predict delays, and reduce costs with intelligent insights.",
    features: [
      "Predictive analytics dashboard",
      "Smart route optimization",
      "Real-time cost forecasting",
      "Performance insights",
    ],
    icon: Brain,
  },
  {
    title: "Sustainability Solutions",
    description: "Eco-friendly logistics solutions that reduce carbon footprint and support your environmental sustainability goals.",
    features: [
      "Carbon footprint tracking",
      "Green transportation options",
      "Sustainable packaging solutions",
      "Environmental reporting",
    ],
    icon: Leaf,
  },
  {
    title: "Digital Integration Hub",
    description: "Seamless integration with your existing systems through APIs and comprehensive digital transformation services.",
    features: [
      "Custom API integration",
      "Multi-system connectivity",
      "Automated digital workflows",
      "Real-time data synchronization",
    ],
    icon: Network,
  },
];

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoveredAdditionalService, setHoveredAdditionalService] = useState<string | null>(null);

  const servicesToShow = showAllServices ? SERVICES : SERVICES.slice(0, 4);

  const scrollToServices = () => {
    document.getElementById("services-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
    <motion.section
  id="services-hero"
  className="relative section-padding bg-cover bg-center bg-no-repeat parallax-bg"
  style={{ backgroundImage: `url(${warehouseBg})` }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.1 }}
  transition={{ duration: 0.8 }}
>
  {/* Darker overlay for better text contrast */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-orange-600/80 to-orange-500/85 z-10" />
  
  {/* Additional dark vignette for edges */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] z-10" />

  <div className="relative z-20 container-width">
    <motion.div
      className="text-center text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Badge */}
      <motion.div 
        className="inline-flex items-center px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30" 
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }} 
        whileTap={{ scale: 0.95 }}
      >
        <Star className="w-5 h-5 text-orange-200 mr-2 animate-pulse" />
        <span className="text-sm font-semibold tracking-wide">Premium Logistics Services</span>
      </motion.div>

      {/* Main Heading - Pure white with shadow */}
      <motion.h1 
        className="mb-6 text-white font-bold drop-shadow-2xl" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Our Logistics Services
      </motion.h1>

      {/* Description - Better contrast */}
      <motion.p 
        className="text-xl text-white max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Comprehensive logistics solutions tailored to meet your unique business needs.
        From freight forwarding to supply chain management, we deliver excellence at every step.
      </motion.p>

      {/* CTA Button - Higher contrast */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Button
          size="lg"
          className="btn-scale bg-white text-primary hover:bg-orange-50 font-bold text-lg px-8 py-6 shadow-2xl"
          onClick={scrollToServices}
        >
          Explore Our Services
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </motion.div>
  </div>

  {/* Bottom gradient fade */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
</motion.section>

      {/* Services Grid */}
      <motion.section id="services-grid" className="section-padding bg-background relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="container-width relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4" whileHover={{ scale: 1.05 }}>
              <Zap className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Complete Solutions</span>
            </motion.div>
            <motion.h2 className="mb-4">Choose Your Service</motion.h2>
            <motion.p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Each service is designed with your business success in mind, backed by our expertise
              and commitment to excellence.
            </motion.p>
          </motion.div>

<motion.div 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  initial={{ opacity: 0 }} 
  whileInView={{ opacity: 1 }} 
  viewport={{ once: true }} 
  transition={{ duration: 0.6, staggerChildren: 0.2 }}
>
  <AnimatePresence mode="wait">
    {servicesToShow.map((service, index) => (
      <motion.div
        key={service.title}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -10 }}
        className="h-full"  // 👈 ensures wrapper fills height
      >
        <Card
          className="group relative flex flex-col h-full border hover:border-primary/50 hover:shadow-lg bg-white transition-all duration-300"
          onMouseEnter={() => setHoveredService(service.title)}
          onMouseLeave={() => setHoveredService(null)}
        >
          {/* Overlay gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 transition-opacity duration-300 ${
              hoveredService === service.title ? "opacity-100" : ""
            }`}
          ></div>

          <CardContent className="flex flex-col flex-1 p-6 relative z-10">
            {/* Icon */}
            <motion.div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                hoveredService === service.title
                  ? "bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/50 shadow-lg -translate-y-1"
                  : "bg-gradient-to-br from-primary/10 to-primary/20 border-2 border-primary/20"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <service.icon
                className={`w-7 h-7 transition-all duration-300 ${
                  hoveredService === service.title ? "text-primary scale-110" : "text-primary/70"
                }`}
              />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
              {service.description}
            </p>

            {/* Features */}
            <div className="space-y-2 flex-1">
              {service.features.slice(0, 3).map((feature) => (
                <div key={feature} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </AnimatePresence>
</motion.div>

{/* Show More Button */}
{SERVICES.length > 4 && (
  <motion.div className="text-center mt-12" whileHover={{ scale: 1.02 }}>
    <Button
      size="lg"
      className="btn-scale bg-primary hover:bg-primary-hover shadow-xl px-8 py-6"
      onClick={() => setShowAllServices(!showAllServices)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={showAllServices ? "less" : "more"}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
        >
          {showAllServices ? "Show Less Services" : "Show More Services"}
        </motion.span>
      </AnimatePresence>
      <ArrowRight
        className={`ml-2 w-5 h-5 transition-transform ${showAllServices ? "rotate-180" : ""}`}
      />
    </Button>
    {!showAllServices && (
      <p className="text-muted-foreground text-sm mt-3">
        Showing 4 of {SERVICES.length} services
      </p>
    )}
  </motion.div>
)}


        </div>
      </motion.section>

      {/* Additional Services */}
      <motion.section
        id="additional-services"
        className="section-padding relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${globalNetwork})` }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/90 to-slate-900/90"></div>
        <div className="container-width relative z-20">
          <motion.div
            className="text-center mb-20 text-white"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20" whileHover={{ scale: 1.05 }}>
              <Sparkles className="w-5 h-5 text-orange-300 mr-2" />
              <span className="text-sm font-medium">Innovation & Technology</span>
            </motion.div>
            <motion.h2 className="mb-6 text-white font-bold text-4xl lg:text-5xl">
              Beyond Traditional Logistics
            </motion.h2>
            <motion.p className="text-white/90 text-xl max-w-4xl mx-auto leading-relaxed">
              Innovative solutions that go beyond traditional logistics, powered by cutting-edge
              technology and expertise.
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, staggerChildren: 0.2 }}>
            {ADDITIONAL_SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-500"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  onMouseEnter={() => setHoveredAdditionalService(service.title)}
                  onMouseLeave={() => setHoveredAdditionalService(null)}
                >
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                      hoveredAdditionalService === service.title
                        ? "shadow-2xl shadow-white/25 border-2 border-white/30"
                        : ""
                    }`}
                  ></div>

                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                        hoveredAdditionalService === service.title
                          ? "bg-white/20 border-2 border-white/30 shadow-lg -translate-y-1 scale-105"
                          : "bg-white/10 border border-white/20"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <service.icon
                        className={`w-9 h-9 transition-all duration-300 ${
                          hoveredAdditionalService === service.title
                            ? "text-white scale-110"
                            : "text-white/80"
                        }`}
                      />
                    </motion.div>

                    <h3
                      className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                        hoveredAdditionalService === service.title
                          ? "text-white translate-x-2"
                          : "text-white/95"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className="text-white/80 text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-orange-300 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="section-padding bg-gradient-to-r from-primary via-primary-hover to-primary text-primary-foreground relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div
            className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container-width text-center relative z-10">
          <motion.h2 className="mb-6 text-primary-foreground">
            Ready to Transform Your Logistics?
          </motion.h2>
          <motion.p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Join thousands of businesses that trust us for their logistics needs. Experience the
            difference that expertise, technology, and dedication can make.
          </motion.p>
          <Link to={'/contact' }>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="lg"
            className="btn-scale bg-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
          >
            Start Partnership
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          </motion.div>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
