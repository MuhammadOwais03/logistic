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
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

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
    },
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Reliable ocean freight services connecting major ports worldwide with flexible container options and competitive shipping rates.',
      features: ['FCL & LCL options', 'Port-to-port service', 'Cargo insurance', 'Documentation support'],
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and secure air freight solutions for time-sensitive shipments with express delivery options and global coverage.',
      features: ['Express delivery', 'Temperature controlled', 'Priority handling', '24/7 monitoring'],
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Distribution',
      description: 'State-of-the-art warehousing facilities with advanced inventory management and distribution services.',
      features: ['Climate controlled', 'Inventory management', 'Pick & pack services', 'Distribution network'],
    },
    {
      icon: Package,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization services designed to streamline operations and reduce costs.',
      features: ['Supply chain analysis', 'Vendor management', 'Cost optimization', 'Process automation'],
    },
    {
      icon: Clock,
      title: 'Express Delivery',
      description: 'Urgent delivery services with same-day and next-day options for critical shipments across major cities.',
      features: ['Same-day delivery', 'Next-day service', 'Real-time updates', 'Signature confirmation'],
    },
    {
      icon: Globe,
      title: 'International Shipping',
      description: 'Global shipping solutions with comprehensive customs support and international trade expertise.',
      features: ['Global network', 'Customs expertise', 'Trade compliance', 'Multi-modal transport'],
    },
    {
      icon: Shield,
      title: 'Specialized Cargo',
      description: 'Handling of specialized cargo including hazardous materials, oversized items, and high-value shipments.',
      features: ['Hazmat handling', 'Oversized cargo', 'High-value items', 'Special equipment'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="services-hero" className="section-padding bg-muted/30">
        <div className="container-width">
          <div className={`text-center fade-in ${visibleSections.has('services-hero') ? 'visible' : ''}`}>
            <h1 className="mb-6">Our Logistics Services</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive logistics solutions tailored to meet your unique business needs. 
              From freight forwarding to supply chain management, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`card-hover relative overflow-hidden fade-in ${visibleSections.has('services-grid') ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {service.highlight}
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section id="additional-services" className="section-padding bg-muted/30">
        <div className="container-width">
          <div className={`text-center mb-16 fade-in ${visibleSections.has('additional-services') ? 'visible' : ''}`}>
            <h2 className="mb-4">Additional Services</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Beyond our core logistics services, we offer additional solutions to support 
              your business operations and ensure complete supply chain optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Logistics Consulting',
                description: 'Expert consultation to optimize your supply chain strategy and reduce operational costs.',
                features: ['Strategic planning', 'Cost analysis', 'Process optimization'],
              },
              {
                title: 'Technology Solutions',
                description: 'Advanced logistics technology platforms for inventory management and shipment tracking.',
                features: ['Real-time tracking', 'Inventory systems', 'Analytics dashboard'],
              },
              {
                title: 'Customer Support',
                description: '24/7 dedicated customer support with experienced logistics professionals.',
                features: ['24/7 availability', 'Expert assistance', 'Multi-language support'],
              },
            ].map((service, index) => (
              <Card 
                key={service.title} 
                className={`card-hover fade-in ${visibleSections.has('additional-services') ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="mb-6 text-primary-foreground">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Every business is unique, and so are its logistics needs. Contact us to discuss 
            a customized solution tailored specifically for your requirements.
          </p>
          <Button variant="outline" size="lg" className="btn-scale bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Get Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;