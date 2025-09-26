import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Truck, 
  Package, 
  Globe, 
  Shield, 
  Clock, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Sparkles
} from 'lucide-react';
import heroImage from '@/assets/hero-logistics.jpg';
import teamImage from '@/assets/team-logistics.jpg';

const Home = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    // Mouse tracking for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: Truck,
      title: 'Freight Forwarding',
      description: 'Global freight solutions with reliable delivery and competitive rates worldwide.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Package,
      title: 'Warehousing',
      description: 'Secure storage facilities with advanced inventory management systems.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Supply Chain Solutions',
      description: 'End-to-end supply chain optimization for maximum efficiency.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Express Delivery',
      description: 'Fast and secure delivery services for urgent shipments.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock service ensuring your cargo moves without delay.',
      stats: '365 Days',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced logistics professionals dedicated to your success.',
      stats: '500+ Experts',
    },
    {
      icon: Shield,
      title: 'Secure Handling',
      description: 'Advanced security measures to protect your valuable shipments.',
      stats: '99.9% Safety',
    },
  ];

  const partners = [
    { name: 'Global Express', rating: 5 },
    { name: 'Maritime Solutions', rating: 5 },
    { name: 'Air Cargo Pro', rating: 4.8 },
    { name: 'Logistics Alliance', rating: 4.9 },
    { name: 'Supply Chain Plus', rating: 5 }
  ];

  const achievements = [
    { number: '10K+', label: 'Shipments Delivered', icon: '📦' },
    { number: '50+', label: 'Countries Served', icon: '🌍' },
    { number: '24/7', label: 'Customer Support', icon: '🚀' },
    { number: '99.9%', label: 'On-Time Delivery', icon: '⚡' },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-overlay-gradient"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-orange-300 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-orange-500 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        
        <div className={`relative z-20 text-center text-white px-4 fade-in-scale ${visibleSections.has('hero') ? 'visible' : ''}`}>
          <div className="inline-flex items-center px-6 py-3 bg-white/20 glass rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-orange-300 mr-2 animate-pulse" />
            <span className="text-sm font-medium">Leading Logistics Excellence Since 2010</span>
          </div>
          
          <h1 className="mb-6 text-white font-bold gradient-text">
            Delivering Excellence in Logistics
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
            Your trusted partner for seamless supply chain solutions, 
            connecting businesses worldwide with reliability, innovation, and unmatched expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="btn-scale btn-glow text-lg px-8 py-6 bg-primary hover:bg-primary-hover">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="btn-scale text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20">
              Watch Demo
            </Button>
          </div>
          
          {/* Achievement stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label} 
                className={`text-center glass p-4 rounded-xl backdrop-blur-sm fade-in stagger-${index + 1} ${visibleSections.has('hero') ? 'visible' : ''}`}
              >
                <div className="text-2xl mb-1">{achievement.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
                <div className="text-xs text-white/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced What We Do Section */}
      <section id="what-we-do" className="section-padding bg-background relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="container-width relative z-10">
          <div className={`text-center mb-16 fade-in ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Award className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">World-Class Services</span>
            </div>
            <h2 className="mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We provide comprehensive logistics solutions that streamline your supply chain, 
              reduce operational costs, and deliver exceptional results for your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`interactive-card border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-50 fade-in-scale ${visibleSections.has('what-we-do') ? 'visible' : ''} stagger-${index + 1}`}
              >
                <CardContent className="p-8 text-center relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 icon-float shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 hover:opacity-10 transition-opacity duration-500`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Our Views Section with Team Image */}
      <section id="our-views" className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`fade-in-left ${visibleSections.has('our-views') ? 'visible' : ''}`}>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Star className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Our Philosophy</span>
              </div>
              <h2 className="mb-6">Our Vision & Values</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At LogiTrans, we envision a world where logistics seamlessly connects businesses 
                and communities. Our commitment to innovation, sustainability, and customer 
                satisfaction drives everything we do, every single day.
              </p>
              <div className="space-y-4">
                {['Innovation-driven solutions', 'Customer-first approach', 'Sustainable practices', 'Global excellence standard'].map((value, index) => (
                  <div key={value} className={`flex items-center space-x-3 fade-in-left stagger-${index + 1} ${visibleSections.has('our-views') ? 'visible' : ''}`}>
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`fade-in-right ${visibleSections.has('our-views') ? 'visible' : ''}`}>
              <div className="relative">
                <img 
                  src={teamImage} 
                  alt="LogiTrans Team" 
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                
                {/* Feature cards overlay */}
                <div className="absolute -bottom-8 -right-8 grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <Card 
                      key={feature.title} 
                      className={`glass border-white/20 p-4 w-48 card-float stagger-${index + 1}`}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-foreground">{feature.stats}</div>
                            <div className="text-xs text-muted-foreground">{feature.title}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Services Section */}
      <section id="our-services" className="section-padding bg-background relative">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="container-width relative z-10">
          <div className={`text-center mb-16 fade-in ${visibleSections.has('our-services') ? 'visible' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Award className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Premium Services</span>
            </div>
            <h2 className="mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to meet your unique business needs 
              and drive your success forward with innovation and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'International Shipping',
                description: 'Seamless global shipping solutions with customs clearance and comprehensive documentation support.',
                icon: Globe,
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Warehouse Management',
                description: 'State-of-the-art facilities with real-time inventory tracking and advanced management systems.',
                icon: Package,
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Last Mile Delivery',
                description: 'Efficient final delivery solutions ensuring customer satisfaction and on-time delivery.',
                icon: Truck,
                gradient: 'from-orange-500 to-red-500',
              },
            ].map((service, index) => (
              <Card 
                key={service.title} 
                className={`interactive-card border-0 shadow-xl overflow-hidden bg-gradient-to-br from-white to-gray-50 fade-in-scale ${visibleSections.has('our-services') ? 'visible' : ''} stagger-${index + 1}`}
              >
                <CardContent className="p-8 relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 icon-float shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Button variant="outline" size="sm" className="group bg-white hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Our Affiliation Section */}
      <section id="our-affiliation" className="section-padding bg-muted/20">
        <div className="container-width">
          <div className={`text-center mb-12 fade-in ${visibleSections.has('our-affiliation') ? 'visible' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Star className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Trusted Partners</span>
            </div>
            <h2 className="mb-4">Our Partners & Affiliations</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Trusted by leading companies worldwide, we maintain strategic partnerships 
              that enhance our service capabilities and global reach.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-5 gap-6 fade-in ${visibleSections.has('our-affiliation') ? 'visible' : ''}`}>
            {partners.map((partner, index) => (
              <Card 
                key={partner.name} 
                className={`interactive-card text-center border-0 shadow-md hover:shadow-xl transition-all duration-500 stagger-${index + 1}`}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 icon-float">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{partner.name}</h4>
                  <div className="flex justify-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(partner.rating) ? 'text-orange-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{partner.rating}/5.0</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="mb-6 text-primary-foreground">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust LogiTrans for their logistics needs. 
            Get started today with a custom quote.
          </p>
          <Button variant="outline" size="lg" className="btn-scale bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Contact Us Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;