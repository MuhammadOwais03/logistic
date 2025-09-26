import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Target, 
  Shield, 
  Award, 
  CheckCircle, 
  TrendingUp,
  Globe,
  Clock
} from 'lucide-react';

const About = () => {
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

  const achievements = [
    { number: '1000+', label: 'Happy Clients' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' },
    { number: '99.9%', label: 'Delivery Success Rate' },
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="about-hero" className="section-padding bg-muted/30">
        <div className="container-width">
          <div className={`text-center fade-in ${visibleSections.has('about-hero') ? 'visible' : ''}`}>
            <h1 className="mb-6">About LogiTrans</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Leading the logistics industry with innovative solutions, exceptional service, 
              and unwavering commitment to customer success since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`fade-in ${visibleSections.has('who-we-are') ? 'visible' : ''}`}>
              <div className="bg-primary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  {achievements.map((achievement, index) => (
                    <div key={achievement.label} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`fade-in ${visibleSections.has('who-we-are') ? 'visible' : ''}`}>
              <h2 className="mb-6">Who We Are</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                LogiTrans is a premier logistics company founded on the principles of reliability, 
                innovation, and customer satisfaction. With over a decade of experience in the 
                industry, we have built a reputation for delivering exceptional supply chain 
                solutions to businesses of all sizes.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of experienced professionals combines deep industry knowledge with 
                cutting-edge technology to provide seamless logistics experiences. From small 
                startups to Fortune 500 companies, we've helped thousands of businesses 
                optimize their supply chains and achieve their growth objectives.
              </p>
              <div className="space-y-3">
                {[
                  'Founded in 2010 with a vision for excellence',
                  'Serving clients across 50+ countries worldwide',
                  'State-of-the-art facilities and technology',
                  'Committed to sustainable logistics practices'
                ].map((point) => (
                  <div key={point} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="section-padding bg-muted/30">
        <div className="container-width">
          <div className={`text-center mb-16 fade-in ${visibleSections.has('why-choose-us') ? 'visible' : ''}`}>
            <h2 className="mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Discover the advantages that make LogiTrans the preferred logistics partner 
              for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={item.title} 
                className={`card-hover fade-in ${visibleSections.has('why-choose-us') ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Policy Section */}
      <section id="mission-vision-policy" className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                content: 'To provide innovative, reliable, and cost-effective logistics solutions that empower businesses to achieve their goals while contributing to sustainable global trade and commerce.',
              },
              {
                icon: Users,
                title: 'Our Vision',
                content: 'To be the world\'s most trusted logistics partner, connecting businesses and communities through seamless, technology-driven supply chain solutions that create lasting value.',
              },
              {
                icon: Shield,
                title: 'Our Policy',
                content: 'We are committed to maintaining the highest standards of integrity, transparency, and environmental responsibility in all our operations while ensuring customer satisfaction and employee well-being.',
              },
            ].map((item, index) => (
              <Card 
                key={item.title} 
                className={`text-center card-hover fade-in ${visibleSections.has('mission-vision-policy') ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="mb-6 text-primary-foreground">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Experience the LogiTrans difference. Let us help you streamline your supply chain 
            and achieve your business objectives with our comprehensive logistics solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;