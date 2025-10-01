import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Shield, 
  Award, 
  CheckCircle, 
  TrendingUp,
  Globe,
  Globe2,
  Headphones,CheckCircle2,
  Clock,
  ArrowRight,
  Star,
  Heart,
  Zap
} from 'lucide-react';
import teamLogistics from '@/assets/team-logistics.jpg';
import globalNetwork from '@/assets/global-network.jpg';
import aboutImage from '@/assets/about.jpeg';

const About = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const achievements = [
  {
    number: "100+",
    label: "Happy Clients",
    icon: Users,             // 👥 Users icon
  },
  {
    number: "150+",
    label: "Countries Served",
    icon: Globe2,            // 🌍 Globe icon
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: Headphones,        // 🎧 Support/Headset icon
  },
  {
    number: "99.9%",
    label: "Delivery Success Rate",
    icon: CheckCircle2,      // ✅ Success check icon
  },
];


  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Streamlined processes that save you time and reduce operational overhead.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Advanced security protocols ensuring your cargo is protected throughout transit.',
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Competitive pricing without compromising on quality or service excellence.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive worldwide network providing seamless international logistics.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer support from experienced logistics professionals.',
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Award-winning service backed by industry certifications and recognition.',
    },
  ];

  const ourFoundation = [
            {
              icon: Target,
              title: 'Our Mission',
              content: 'To provide innovative, reliable, and cost-effective logistics solutions that empower businesses to achieve their goals while contributing to sustainable global trade and commerce.',
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: Users,
              title: 'Our Vision',
              content: 'To be the world\'s most trusted logistics partner, connecting businesses and communities through seamless, technology-driven supply chain solutions that create lasting value.',
              gradient: "from-indigo-500 to-purple-500",
            },
            {
              icon: Shield,
              title: 'Our Policy',
              content: 'We are committed to maintaining the highest standards of integrity, transparency, and environmental responsibility in all our operations while ensuring customer satisfaction and employee well-being.',
              
              gradient: "from-blue-400 to-indigo-500",
            },
          ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section with Background Image */}
      <motion.section 
        id="about-hero" 
        className="relative section-padding bg-cover bg-center bg-no-repeat bg-overlay-gradient parallax-bg"
        style={{ backgroundImage: `url(${teamLogistics})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-20 container-width">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-white/20 glass rounded-full mb-6 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-sm font-medium">Our Story & Values</span>
            </motion.div>
            <motion.h1 
              className="mb-6 text-white font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              About WorldWide Shipping and Logistics (Smc-Pvt) Ltd.
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Leading the logistics industry with innovative solutions, exceptional service, 
              and unwavering commitment to customer success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
            <Button size="lg" variant="outline" className="btn-scale btn-glow bg-white text-primary hover:text-primary hover:bg-primary-hover" 
                        
            
            >
              Learn Our Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </motion.div>
            
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </motion.section>

      {/* Who We Are Section */}
      <motion.section id="who-we-are" className="section-padding bg-background relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="container-width relative z-10">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, staggerChildren: 0.2 }}>
            <motion.div
              className="fade-in-right"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="LogiTrans Team"
                  className="rounded-2xl shadow-2xl w-full h-120 object-fit-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>

                {/* Feature cards overlay */}
                <motion.div 
                  className="absolute -bottom-8 -right-8 grid grid-cols-1 gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, staggerChildren: 0.2 }}
                >
                  {achievements.map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      className="glass border-white/20 bg-white p-4 w-48 card-float rounded-xl"
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      whileHover={{ y: -5 }}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-foreground">
                              {feature.number}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {feature.label}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="fade-in-right relative"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute left-1/2 top-[34%] lg:top-[53%] -translate-x-1/2 -translate-y-1/2 opacity-[0.09] pointer-events-none z-0">
                <div className="w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-center">
                  <img src="/logo.png" alt="" className="w-full h-full object-contain" />
                </div>
              </div>
              <motion.div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4" whileHover={{ scale: 1.05 }}>
                <Zap className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Our Foundation</span>
              </motion.div>
              <motion.h2 className="mb-6">Who We Are</motion.h2>
              <motion.p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                WorldWide Shipping and Logistics (Smc-Pvt) Ltd. is a premier logistics company founded on the principles of reliability, 
                innovation, and customer satisfaction. With over a decade of experience in the 
                industry, we have built a reputation for delivering exceptional supply chain 
                solutions to businesses of all sizes.
              </motion.p>
              <motion.p className="text-muted-foreground mb-8 leading-relaxed">
                Our passionate team blends industry expertise with cutting-edge technology to deliver logistics solutions that are seamless, reliable, and future-ready. Whether supporting fast-growing startups or established enterprises, we empower businesses to streamline their supply chains, reduce costs, and accelerate growth with confidence.
              </motion.p>
              <motion.div className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, staggerChildren: 0.2 }}>
                {[
                  'Built to redefine modern logistics',
                  'Serving clients across 150+ countries worldwide',
                  'State-of-the-art facilities and technology',
                  'Committed to sustainable logistics practices'
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{point}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Why Choose Us Section */}
      <motion.section 
        id="why-choose-us" 
        className="section-padding relative bg-cover bg-center bg-no-repeat bg-overlay"
        style={{ backgroundImage: `url(${globalNetwork})` }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container-width relative z-20">
          <motion.div
            className="text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div className="inline-flex items-center px-4 py-2 bg-white/20 glass rounded-full mb-6 backdrop-blur-sm" whileHover={{ scale: 1.05 }}>
              <Star className="w-5 h-5 text-orange-300 mr-2" />
              <span className="text-sm font-medium">Why WorldWide Shipping and Logistics (Smc-Pvt) Ltd</span>
            </motion.div>
            <motion.h2 className="mb-4 text-white">Why Choose Us</motion.h2>
            <motion.p className="text-white/90 text-lg max-w-3xl mx-auto">
              Discover the advantages that make WorldWide Shipping and Logistics (Smc-Pvt) Ltd. the preferred logistics partner 
              for businesses worldwide.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <Card className="glass text-white border-white/20 hover:bg-white/40 bg-white/20 transition-all duration-500 interactive-card">
                  <CardContent className="p-6">
                    <motion.div className="w-16 h-16 bg-white/20 glass rounded-2xl flex items-center justify-center mb-6 icon-float shadow-lg" whileHover={{ scale: 1.05 }}>
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Mission, Vision, Policy Section */}
      <motion.section id="mission-vision-policy" className="section-padding bg-background relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="container-width relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4" whileHover={{ scale: 1.05 }}>
              <Target className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Our Core Values</span>
            </motion.div>
            <motion.h2 className="mb-4">Our Foundation</motion.h2>
            <motion.p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Built on strong principles and guided by clear vision, our values shape every decision we make.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            {ourFoundation.map((item, index) => (              

               <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <Card className="interactive-card border-0 shadow-lg hover:shadow-xl overflow-hidden bg-white backdrop-blur-sm group relative transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 z-10`}
                  ></div>
                  
                  <CardContent className="p-6 relative z-20">
                    
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 text-foreground line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {item.content}
                    </p>

                    {/* Bottom accent line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                  </CardContent>
                </Card>
                </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* Enhanced CTA Section */}
      <motion.section className="section-padding bg-gradient-to-r from-primary via-primary-hover to-primary text-primary-foreground relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-width text-center relative z-10">
          <motion.div className="bounce-in" initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <motion.h2 className="mb-6 text-primary-foreground">
              Ready to Partner with Us?
            </motion.h2>
            <motion.p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Experience the WorldWide Shipping and Logistics (Smc-Pvt) Ltd. difference. Let us help you streamline your supply chain 
              and achieve your business objectives with our comprehensive logistics solutions.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" whileHover={{ scale: 1.02 }}>
            
              <Button
                variant="outline"
                size="lg"
                className="btn-scale bg-primary-foreground text-primary"
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
              >
                Start Partnership <ArrowRight className="ml-2 w-5 h-5" />
              </Button>              
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
