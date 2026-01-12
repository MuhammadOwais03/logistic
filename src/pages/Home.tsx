import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Ship,
  Plane,
  Shield,
  Package,
  Truck,
  Globe,
  AlertTriangle,
  Thermometer,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Sparkles,
  Code,
  Trophy,
  Users,
  Clock,
   Facebook,
    Linkedin
} from "lucide-react";




import heroImage from "@/assets/hero-logistics.jpg";
import teamImage from "@/assets/team-logistics.jpg";
import { Link } from "react-router-dom";

const SERVICES_DATA = [
  {
    icon: Truck,
    title: "Freight Forwarding",
    description:
      "Global freight solutions with reliable delivery and competitive rates worldwide.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Package,
    title: "Warehousing",
    description:
      "Secure storage facilities with advanced inventory management systems.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Supply Chain Solutions",
    description: "End-to-end supply chain optimization for maximum .",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Express Delivery",
    description: "Fast and secure delivery services for urgent shipments.",
    gradient: "from-purple-500 to-pink-500",
  },
];

const ALL_SERVICES = [
  {
    title: "Sea Freight",
    description:
      "With unwavering dedication to precision, reliability, and cost-efficiency, we offer tailored solutions that ensure the seamless transportation of your goods across oceans.",
    icon: Ship,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Air Freight",
    description:
      "We excel in providing top-tier air freight solutions that propel your business to new heights. Our dedicated team, extensive network, and cutting-edge technology.",
    icon: Plane,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Reefer Cargo",
    description:
      "Refrigerated cargo logistics is all about precision – Customers need commodity expertise, seamless handovers, flexible temperature control.",
    icon: Thermometer,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Custom Brokerage",
    description:
      "We are an authorized customs clearance company in Pakistan, specializing in streamlining the intricate processes involved in international trade.",
    icon: Shield,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Warehousing",
    description:
      "We provide tailored warehousing solutions to boost your business's productivity and efficiency. With a strategically located 62,000 sq. ft. facility.",
    icon: Package,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Global Transportation",
    description:
      "Our primary objective for door-to-door delivery is to seamlessly collect cargo from the shipper's location and deliver it directly to the consignee.",
    icon: Truck,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Project Cargo",
    description:
      "At Project & Energy Services, we excel in delivering comprehensive logistics project management, crafting creative and cost-effective solutions.",
    icon: Truck,
    gradient: "from-teal-500 to-blue-500",
  },
  {
    title: "Hazardous Cargo",
    description:
      "With a wealth of expertise and knowledge inherited since our company's inception, Seagate Logistics has consistently earned the trust of clients.",
    icon: AlertTriangle,
    gradient: "from-red-500 to-orange-500",
  },
];

const ACHIEVEMENTS = [
  { icon: Code, number: "150+", label: "Projects Completed" },
  { icon: Users, number: "100+", label: "Happy Clients" },
  { icon: Clock, number: "24/7", label: "Support Available" },
  { icon: CheckCircle, number: "100%", label: "Client Satisfaction" },
];

const FEATURES = [
  {
    icon: Clock,
    title: "24/7 Operations",
    stats: "365 Days",
  },
  {
    icon: Users,
    title: "",
    stats: "Expert Team",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    stats: "99.9% Safety",
  },
];

const VALUES = [
  "Innovation-driven solutions",
  "Customer-first approach",
  "Sustainable practices",
  "Global excellence standard",
];

const Home = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const displayedServices = showAllServices
    ? ALL_SERVICES
    : ALL_SERVICES.slice(0, 4);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      {/* Hero Section */}
      <motion.section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-orange-600/85 to-orange-500/90" />
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-[5%] w-16 h-16 border-4 border-white/30 rotate-45 animate-float" />
        <div className="absolute bottom-1/3 right-[8%] w-20 h-20 border-4 border-white/20 rounded-full animate-float-slow" />
        <div className="absolute top-[15%] right-[15%] w-12 h-12 bg-white/10 backdrop-blur-sm animate-pulse" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left Content */}
            <motion.div
              className="text-white space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full border border-white/20"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-4 h-4 text-orange-200 animate-pulse" />
                <span className="text-sm font-semibold tracking-wide">
                  Modern Logistics Excellence
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 text-white drop-shadow-2xl">
                  Delivering Excellence
                  <span className="block text-white mt-2">
                    Across the Globe
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Your trusted partner for seamless supply chain solutions,
                connecting businesses worldwide with reliability, innovation,
                and unmatched expertise.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link to="/services">
                  <Button
                    size="lg"
                    className="btn-scale bg-white text-primary hover:bg-orange-50 text-lg px-8 py-6 font-bold shadow-2xl"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold backdrop-blur-sm"
                  >
                    Get a Quote
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex items-center gap-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex -space-x-3">
                  {["😊", "⭐", "👍", "💯"].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center text-lg"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-base">100+ Happy Clients</div>
                  <div className="text-white/80">
                    ⭐⭐⭐⭐⭐ Rated Worldwide
                  </div>
                </div>
              </motion.div>

               {/* Social Links */}
              <motion.div
                className="flex items-center gap-3 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <span className="text-white/70 text-md font-medium mr-2">
                  Follow Us:
                </span>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/25 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/25 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Cards */}
            <motion.div
              className="grid grid-cols-2 gap-4 lg:gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {ACHIEVEMENTS.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />

                  <achievement.icon className="w-10 h-10 sm:w-12 sm:h-12 text-orange-100 mb-4 group-hover:scale-110 transition-transform" />

                  <div className="relative">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm sm:text-base text-white/80 font-medium">
                      {achievement.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              document
                .getElementById("what-we-do")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="mouse-scroll-indicator">
              <div className="mouse">
                <div className="wheel" />
              </div>
            </div>
            <span className="text-white/70 text-xs mt-2 font-medium tracking-wider">
              SCROLL
            </span>
          </motion.div>
        </div>

        <style>{`
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(20px, -50px) scale(1.1); }
      50% { transform: translate(-20px, 20px) scale(0.9); }
      75% { transform: translate(50px, 10px) scale(1.05); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(45deg); }
      50% { transform: translateY(-20px) rotate(45deg); }
    }

    @keyframes float-slow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-30px); }
    }

    .animate-blob {
      animation: blob 7s infinite;
    }

    .animation-delay-2000 {
      animation-delay: 2s;
    }

    .animation-delay-4000 {
      animation-delay: 4s;
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }

    .mouse-scroll-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .mouse {
      width: 26px;
      height: 42px;
      border: 2px solid rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      position: relative;
      display: flex;
      justify-content: center;
    }

    .wheel {
      width: 4px;
      height: 8px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 2px;
      position: absolute;
      top: 8px;
      animation: scroll 1.5s infinite;
    }

    @keyframes scroll {
      0% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(12px); }
    }
  `}</style>
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        id="what-we-do"
        className="section-padding bg-background relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-width relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                World-Class Services
              </span>
            </motion.div>
            <motion.h2 className="mb-4">What We Do</motion.h2>
            <motion.p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We provide comprehensive logistics solutions that streamline your
              supply chain, reduce operational costs, and deliver exceptional
              results for your business growth.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            {SERVICES_DATA.map((service) => (
              <motion.div
                key={service.title}
                className="flex"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="interactive-card border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-50 flex-1">
                  <CardContent className="p-8 text-center relative h-full flex flex-col">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 icon-float shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    {/* gradient hover effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 hover:opacity-10 transition-opacity duration-500`}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Views Section */}
      <motion.section
        id="our-views"
        className="section-padding bg-muted/30 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container-width relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            <motion.div
              className="fade-in-left relative"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Watermark Logo */}
              <div className="absolute left-1/2 top-[50%] lg:top-[62%] -translate-x-1/2 -translate-y-1/2 opacity-[0.09] pointer-events-none z-0">
                <div className="w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <motion.div
                className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Star className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  Our Philosophy
                </span>
              </motion.div>
              <motion.h2 className="mb-6">Our Vision & Values</motion.h2>
              <motion.p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At WorldWide Shipping & Logistics, we envision a world where
                logistics seamlessly connects businesses and communities. Our
                commitment to innovation, sustainability, and customer
                satisfaction drives everything we do, every single day.
              </motion.p>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, staggerChildren: 0.2 }}
              >
                {VALUES.map((value, i) => (
                  <motion.div
                    key={value}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ x: 10 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="fade-in-right"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div className="relative" whileHover={{ scale: 1.02 }}>
                <img
                  src={teamImage}
                  alt="WorldWide Shipping & Logistics. Team"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />

                <motion.div
                  className="absolute -bottom-8 -right-8 grid grid-cols-1 gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, staggerChildren: 0.2 }}
                >
                  {FEATURES.map((feature) => (
                    <motion.div
                      key={feature.title}
                      className="card-float" // handles floating animation only
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="glass border-white bg-white p-4 w-48 rounded-xl -rotate-45">
                        <CardContent className="p-0">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                              <feature.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-foreground">
                                {feature.stats}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {feature.title}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Services Section */}
      <motion.section
        id="our-services"
        className="section-padding bg-background relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-width relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Premium Services
              </span>
            </motion.div>
            <motion.h2 className="mb-4">Our Services</motion.h2>
            <motion.p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to meet your unique
              business needs and drive your success forward with innovation and
              reliability.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            {displayedServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <Card className="interactive-card border-0 shadow-lg hover:shadow-xl overflow-hidden bg-white backdrop-blur-sm group relative transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 z-10`}
                  />

                  <CardContent className="p-6 relative z-20">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="text-lg font-bold mb-3 text-foreground line-clamp-1">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center" whileHover={{ scale: 1.02 }}>
            <Button
              onClick={() => setShowAllServices(!showAllServices)}
              size="lg"
              className="btn-scale btn-glow text-lg px-8 py-6 bg-primary hover:bg-primary-hover shadow-xl hover:shadow-2xl"
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={showAllServices ? "less" : "more"}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {showAllServices ? "Show Less" : "View All Services"}
                </motion.span>
              </AnimatePresence>
              <ArrowRight
                className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                  showAllServices ? "rotate-180" : ""
                }`}
              />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="section-padding bg-gradient-to-r from-primary via-primary-hover to-primary text-primary-foreground relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
          <div
            className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container-width text-center relative z-10">
          <motion.div
            className="bounce-in"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 className="mb-6 text-primary-foreground">
              Ready to Optimize Your Supply Chain?
            </motion.h2>
            <motion.p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust WorldWide Shipping
              & Logistics for their logistics needs. Get started today with a
              custom quote.
            </motion.p>
            <Link to={"/contact"}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-scale bg-primary-foreground text-primary"
                >
                  Contact Us Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
