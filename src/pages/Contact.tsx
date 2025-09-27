import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Headphones,
  Building,
  ArrowRight,
  Star,
  Zap,
  MessageCircle
} from 'lucide-react';
import { z } from 'zod';
import globalNetwork from '@/assets/global-network.jpg';

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string().trim().min(5, { message: "Subject must be at least 5 characters" }).max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" })
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Validation Error",
          description: "Please check the form fields and try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: 'Call us for immediate assistance',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@logitrans.com', 'support@logitrans.com'],
      description: 'Send us your questions anytime',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Logistics Avenue', 'Business District, NY 10001'],
      description: 'Visit our main office',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      description: 'We\'re here when you need us',
    },
  ];

  const quickContact = [
    {
      icon: MessageSquare,
      title: 'General Inquiries',
      description: 'For general questions about our services',
      action: 'Send Message',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'Need help with existing shipments',
      action: 'Get Support',
    },
    {
      icon: Building,
      title: 'Business Partnerships',
      description: 'Interested in partnering with us',
      action: 'Partner With Us',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Background Image */}
      <section 
        className="relative section-padding bg-cover bg-center bg-no-repeat bg-overlay-gradient parallax-bg"
        style={{ backgroundImage: `url(${globalNetwork})` }}
      >
        <div className="relative z-20 container-width">
          <div className="text-center text-white fade-in-scale visible">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 glass rounded-full mb-6 backdrop-blur-sm">
              <MessageCircle className="w-5 h-5 text-orange-300 mr-2" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            <h1 className="mb-6 text-white font-bold">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Ready to optimize your supply chain? Get in touch with our logistics experts 
              and discover how we can help streamline your operations.
            </p>
            <Button size="lg" variant="outline" className="btn-scale btn-glow bg-white text-primary hover:bg-white/90">
              Start Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      <div className="container-width section-padding relative">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className="interactive-card glass border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50">
              <CardHeader className="pb-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4 w-fit">
                  <Zap className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">Quick Response</span>
                </div>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Send className="w-6 h-6 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
                <p className="text-muted-foreground mt-2">We'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this message about?"
                      className={errors.subject ? 'border-destructive' : ''}
                    />
                    {errors.subject && <p className="text-destructive text-sm">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your logistics needs..."
                      rows={6}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && <p className="text-destructive text-sm">{errors.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto btn-scale"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="interactive-card glass border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50">
              <CardHeader>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4 w-fit">
                  <Star className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">Direct Contact</span>
                </div>
                <CardTitle>Contact Information</CardTitle>
                <p className="text-muted-foreground text-sm">Multiple ways to reach us</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title} 
                    className={`space-y-3 fade-in ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} visible`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center icon-float">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                    <div className="ml-15 space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Enhanced Quick Contact Options */}
            <Card className="interactive-card glass border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50">
              <CardHeader>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4 w-fit">
                  <MessageSquare className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">Quick Actions</span>
                </div>
                <CardTitle>Quick Contact</CardTitle>
                <p className="text-muted-foreground text-sm">Choose your preferred method</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickContact.map((option, index) => (
                  <div 
                    key={option.title} 
                    className={`p-5 bg-gradient-to-r from-muted/30 to-muted/50 rounded-xl interactive-card fade-in-scale visible`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center icon-float">
                        <option.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{option.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                        <Button variant="outline" size="sm" className="btn-scale h-9">
                          {option.action}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Map/Location Section */}
      <section className="section-padding bg-muted/30 relative">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="container-width relative z-10">
          <div className={`text-center mb-12 fade-in visible`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Find Us</span>
            </div>
            <h2 className="mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Located in the heart of the business district, our office is easily accessible 
              and equipped with modern facilities to serve your logistics needs.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-background to-muted/50 rounded-2xl p-8 shadow-xl glass border">
            <div className="h-80 bg-gradient-to-br from-muted/50 to-muted rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-dots opacity-20"></div>
              <div className="text-center relative z-10 fade-in-scale visible">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-hover rounded-3xl flex items-center justify-center mx-auto mb-6 icon-float">
                  <MapPin className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Our Location</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  123 Logistics Avenue, Business District<br />
                  New York, NY 10001
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" size="sm" className="btn-scale">
                    Get Directions
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="btn-scale">
                    Call Now
                    <Phone className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;