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
  Star
} from 'lucide-react';
import heroImage from '@/assets/hero-logistics.jpg';

const Home = () => {
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
      description: 'Global freight solutions with reliable delivery and competitive rates.',
    },
    {
      icon: Package,
      title: 'Warehousing',
      description: 'Secure storage facilities with advanced inventory management systems.',
    },
    {
      icon: Globe,
      title: 'Supply Chain Solutions',
      description: 'End-to-end supply chain optimization for maximum efficiency.',
    },
    {
      icon: Shield,
      title: 'Express Delivery',
      description: 'Fast and secure delivery services for urgent shipments.',
    },
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock service ensuring your cargo moves without delay.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced logistics professionals dedicated to your success.',
    },
    {
      icon: Shield,
      title: 'Secure Handling',
      description: 'Advanced security measures to protect your valuable shipments.',
    },
  ];

  const partners = [
    'Global Express', 'Maritime Solutions', 'Air Cargo Pro', 'Logistics Alliance', 'Supply Chain Plus'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat hero-gradient"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className={`relative z-10 text-center text-white px-4 fade-in ${visibleSections.has('hero') ? 'visible' : ''}`}>
          <h1 className="mb-6 text-white font-bold">
            Delivering Excellence in Logistics
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Your trusted partner for seamless supply chain solutions, 
            connecting businesses worldwide with reliability and innovation.
          </p>
          <Button size="lg" className="btn-scale text-lg px-8 py-6">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="section-padding bg-background">
        <div className="container-width">
          <div className={`text-center mb-16 fade-in ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
            <h2 className="mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We provide comprehensive logistics solutions that streamline your supply chain, 
              reduce costs, and deliver exceptional results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`card-hover text-center fade-in ${visibleSections.has('what-we-do') ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Views Section */}
      <section id="our-views" className="section-padding bg-muted/50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`fade-in ${visibleSections.has('our-views') ? 'visible' : ''}`}>
              <h2 className="mb-6">Our Vision & Values</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At LogiTrans, we envision a world where logistics seamlessly connects businesses 
                and communities. Our commitment to innovation, sustainability, and customer 
                satisfaction drives everything we do.
              </p>
              <div className="space-y-4">
                {['Innovation-driven solutions', 'Customer-first approach', 'Sustainable practices'].map((value, index) => (
                  <div key={value} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`fade-in ${visibleSections.has('our-views') ? 'visible' : ''}`}>
              <div className="bg-background rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-3 gap-6 text-center">
                  {features.map((feature, index) => (
                    <div key={feature.title} className="space-y-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm text-foreground">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="our-services" className="section-padding bg-background">
        <div className="container-width">
          <div className={`text-center mb-16 fade-in ${visibleSections.has('our-services') ? 'visible' : ''}`}>
            <h2 className="mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to meet your unique business needs 
              and drive your success forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'International Shipping',
                description: 'Seamless global shipping solutions with customs clearance and documentation.',
                icon: Globe,
              },
              {
                title: 'Warehouse Management',
                description: 'State-of-the-art facilities with real-time inventory tracking systems.',
                icon: Package,
              },
              {
                title: 'Last Mile Delivery',
                description: 'Efficient final delivery solutions ensuring customer satisfaction.',
                icon: Truck,
              },
            ].map((service, index) => (
              <Card 
                key={service.title} 
                className={`card-hover fade-in ${visibleSections.has('our-services') ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="outline" size="sm" className="group">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Affiliation Section */}
      <section id="our-affiliation" className="section-padding bg-muted/30">
        <div className="container-width">
          <div className={`text-center mb-12 fade-in ${visibleSections.has('our-affiliation') ? 'visible' : ''}`}>
            <h2 className="mb-4">Our Partners & Affiliations</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Trusted by leading companies worldwide, we maintain strategic partnerships 
              that enhance our service capabilities.
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-5 gap-8 items-center fade-in ${visibleSections.has('our-affiliation') ? 'visible' : ''}`}>
            {partners.map((partner, index) => (
              <div 
                key={partner} 
                className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{partner}</span>
              </div>
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