import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Truck, 
  Package, 
  Globe, 
  Ship, 
  Plane, 
  Warehouse, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';
import warehouseBg from '@/assets/warehouse-bg.jpg';
import globalNetwork from '@/assets/global-network.jpg';

const Services = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Truck,
      title: 'Freight Forwarding',
      description: 'Comprehensive freight forwarding solutions for domestic and international shipments with door-to-door delivery options.',
      features: ['Door-to-door delivery', 'Customs clearance', 'Real-time tracking', 'Competitive rates'],
      highlight: 'Most Popular',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Reliable ocean freight services connecting major ports worldwide with flexible container options and competitive shipping rates.',
      features: ['FCL & LCL options', 'Port-to-port service', 'Cargo insurance', 'Documentation support'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and secure air freight solutions for time-sensitive shipments with express delivery options and global coverage.',
      features: ['Express delivery', 'Temperature controlled', 'Priority handling', '24/7 monitoring'],
      color: 'from-sky-500 to-sky-600',
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Distribution',
      description: 'State-of-the-art warehousing facilities with advanced inventory management and distribution services.',
      features: ['Climate controlled', 'Inventory management', 'Pick & pack services', 'Distribution network'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Package,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization services designed to streamline operations and reduce costs.',
      features: ['Supply chain analysis', 'Vendor management', 'Cost optimization', 'Process automation'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Clock,
      title: 'Express Delivery',
      description: 'Urgent delivery services with same-day and next-day options for critical shipments across major cities.',
      features: ['Same-day delivery', 'Next-day service', 'Real-time updates', 'Signature confirmation'],
      highlight: 'Fast Track',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Globe,
      title: 'International Shipping',
      description: 'Global shipping solutions with comprehensive customs support and international trade expertise.',
      features: ['Global network', 'Customs expertise', 'Trade compliance', 'Multi-modal transport'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Shield,
      title: 'Specialized Cargo',
      description: 'Handling of specialized cargo including hazardous materials, oversized items, and high-value shipments.',
      features: ['Hazmat handling', 'Oversized cargo', 'High-value items', 'Special equipment'],
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Background Image */}
      <section 
        id="services-hero" 
        className="relative section-padding bg-cover bg-center bg-no-repeat bg-overlay-gradient parallax-bg"
        style={{ backgroundImage: `url(${warehouseBg})` }}
      >
        <div className="relative z-20 container-width">
          <div className={`text-center text-white fade-in-scale ${visibleSections.has('services-hero') ? 'visible' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 glass rounded-full mb-6 backdrop-blur-sm">
              <Star className="w-5 h-5 text-orange-300 mr-2" />
              <span className="text-sm font-medium">Premium Logistics Services</span>
            </div>
            <h1 className="mb-6 text-white font-bold">Our Logistics Services</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive logistics solutions tailored to meet your unique business needs. 
              From freight forwarding to supply chain management, we deliver excellence at every step.
            </p>
            <Button size="lg" variant="outline" className="btn-scale btn-glow bg-white text-primary hover:bg-white/90">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Enhanced Services Grid */}
      <section id="services-grid" className="section-padding bg-background relative">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="container-width relative z-10">
          <div className={`text-center mb-16 fade-in ${visibleSections.has('services-grid') ? 'visible' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Zap className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Complete Solutions</span>
            </div>
            <h2 className="mb-4">Choose Your Service</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Each service is designed with your business success in mind, backed by our expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`interactive-card relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 fade-in-scale ${visibleSections.has('services-grid') ? 'visible' : ''} stagger-${(index % 6) + 1}`}
                onMouseEnter={() => setHoveredService(service.title)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 ${hoveredService === service.title ? 'opacity-10' : ''}`}></div>
                
                {service.highlight && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium animate-pulse">
                      {service.highlight}
                    </div>
                  </div>
                )}
                
                <CardContent className="p-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 icon-float ${hoveredService === service.title ? 'scale-110' : ''}`} 
                       style={{ background: `linear-gradient(135deg, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})` }}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-foreground transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={feature} 
                        className={`flex items-center space-x-2 transition-all duration-300 ${hoveredService === service.title ? 'translate-x-1' : ''}`}
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`w-full group transition-all duration-300 ${hoveredService === service.title ? 'bg-primary text-primary-foreground border-primary' : ''}`}
                  >
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Additional Services with Background Image */}
      <section 
        id="additional-services" 
        className="section-padding relative bg-cover bg-center bg-no-repeat bg-overlay"
        style={{ backgroundImage: `url(${globalNetwork})` }}
      >
        <div className="container-width relative z-20">
          <div className={`text-center mb-16 text-white fade-in ${visibleSections.has('additional-services') ? 'visible' : ''}`}>
            <h2 className="mb-4 text-white">Beyond Traditional Logistics</h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Innovative solutions that go beyond traditional logistics, powered by technology and expertise 
              to give your business the competitive edge it needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Analytics',
                description: 'Advanced analytics and machine learning to optimize routes, predict delays, and reduce costs.',
                features: ['Predictive analytics', 'Route optimization', 'Cost forecasting'],
                icon: '🤖',
              },
              {
                title: 'Sustainability Solutions',
                description: 'Eco-friendly logistics solutions that reduce carbon footprint and support your sustainability goals.',
                features: ['Carbon tracking', 'Green transportation', 'Sustainable packaging'],
                icon: '🌱',
              },
              {
                title: 'Digital Integration',
                description: 'Seamless integration with your existing systems through APIs and digital transformation services.',
                features: ['API integration', 'System connectivity', 'Digital workflows'],
                icon: '🔗',
              },
            ].map((service, index) => (
              <Card 
                key={service.title} 
                className={`glass text-white border-white/20 hover:bg-white/20 transition-all duration-500 fade-in-left ${visibleSections.has('additional-services') ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-orange-300 flex-shrink-0" />
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-hover to-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-width text-center relative z-10">
          <div className="bounce-in">
            <h2 className="mb-6 text-primary-foreground">Ready to Transform Your Logistics?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Join thousands of businesses that trust LogiTrans for their logistics needs. 
              Experience the difference that expertise, technology, and dedication can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="btn-scale btn-magnetic bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Get Custom Quote 
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="ghost" size="lg" className="btn-scale text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;