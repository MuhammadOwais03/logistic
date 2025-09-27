import { useEffect, useState } from 'react';
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
      {/* Enhanced Hero Section with Background Image */}
      <section 
        id="about-hero" 
        className="relative section-padding bg-cover bg-center bg-no-repeat bg-overlay-gradient parallax-bg"
        style={{ backgroundImage: `url(${teamLogistics})` }}
      >
        <div className="relative z-20 container-width">
          <div className={`text-center text-white fade-in-scale ${visibleSections.has('about-hero') ? 'visible' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 glass rounded-full mb-6 backdrop-blur-sm">
              <Heart className="w-5 h-5 text-orange-300 mr-2" />
              <span className="text-sm font-medium">Our Story & Values</span>
            </div>
            <h1 className="mb-6 text-white font-bold">About World Wide Shipping and Logistics (SMC-PVT) LTD</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Leading the logistics industry with innovative solutions, exceptional service, 
              and unwavering commitment to customer success since 2010.
            </p>
            <Button size="lg" variant="outline" className="btn-scale btn-glow bg-white text-primary hover:bg-white/90">
              Learn Our Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="section-padding bg-background relative">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="container-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`fade-in-left ${visibleSections.has('who-we-are') ? 'visible' : ''}`}>
              <img
                src={aboutImage}
                alt="About World Wide Shipping and Logistics"
                className="rounded-3xl shadow-xl w-full object-cover mb-8 border border-primary/10"
              />
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 glass border border-primary/10">
                <div className="grid grid-cols-2 gap-8">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={achievement.label} 
                      className={`text-center interactive-card fade-in-scale ${visibleSections.has('who-we-are') ? 'visible' : ''}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-4xl font-bold text-primary mb-2 counter-up">
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

            <div className={`fade-in-right ${visibleSections.has('who-we-are') ? 'visible' : ''}`}>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Zap className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Our Foundation</span>
              </div>
              <h2 className="mb-6">Who We Are</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                World Wide Shipping and Logistics (SMC-PVT) LTD is a premier logistics company founded on the principles of reliability, 
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
              <div className="space-y-4">
                {[
                  'Founded in 2010 with a vision for excellence',
                  'Serving clients across 50+ countries worldwide',
                  'State-of-the-art facilities and technology',
                  'Committed to sustainable logistics practices'
                ].map((point, index) => (
                  <div 
                    key={point} 
                    className={`flex items-start space-x-3 fade-in ${visibleSections.has('who-we-are') ? 'visible' : ''}`}
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section 
        id="why-choose-us" 
        className="section-padding relative bg-cover bg-center bg-no-repeat bg-overlay"
        style={{ backgroundImage: `url(${globalNetwork})` }}
      >
        <div className="container-width relative z-20">
          <div className={`text-center mb-16 text-white fade-in ${visibleSections.has('why-choose-us') ? 'visible' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 glass rounded-full mb-6 backdrop-blur-sm">
              <Star className="w-5 h-5 text-orange-300 mr-2" />
              <span className="text-sm font-medium">Why LogiTrans</span>
            </div>
            <h2 className="mb-4 text-white">Why Choose Us</h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Discover the advantages that make LogiTrans the preferred logistics partner 
              for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={item.title} 
                className={`glass text-white border-white/20 hover:bg-white/40 bg-white/20 transition-all duration-500 interactive-card fade-in-scale ${visibleSections.has('why-choose-us') ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-white/20 glass rounded-2xl flex items-center justify-center mb-6 icon-float">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mission, Vision, Policy Section */}
      <section id="mission-vision-policy" className="section-padding bg-background relative">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="container-width relative z-10">
          <div className={`text-center mb-16 fade-in ${visibleSections.has('mission-vision-policy') ? 'visible' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Target className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Our Core Values</span>
            </div>
            <h2 className="mb-4">Our Foundation</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Built on strong principles and guided by clear vision, our values shape every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                content: 'To provide innovative, reliable, and cost-effective logistics solutions that empower businesses to achieve their goals while contributing to sustainable global trade and commerce.',
                gradient: 'from-orange-500 to-orange-600',
              },
              {
                icon: Users,
                title: 'Our Vision',
                content: 'To be the world\'s most trusted logistics partner, connecting businesses and communities through seamless, technology-driven supply chain solutions that create lasting value.',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                icon: Shield,
                title: 'Our Policy',
                content: 'We are committed to maintaining the highest standards of integrity, transparency, and environmental responsibility in all our operations while ensuring customer satisfaction and employee well-being.',
                gradient: 'from-green-500 to-green-600',
              },
            ].map((item, index) => (
              <Card 
                key={item.title} 
                className={`text-center interactive-card relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 fade-in-scale ${visibleSections.has('mission-vision-policy') ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5`}></div>
                <CardContent className="p-8 relative z-10">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 icon-float bg-gradient-to-br ${item.gradient}`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
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
            <h2 className="mb-6 text-primary-foreground">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Experience the LogiTrans difference. Let us help you streamline your supply chain 
              and achieve your business objectives with our comprehensive logistics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="btn-scale btn-magnetic bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Start Partnership 
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="ghost" size="lg" className="btn-scale text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;