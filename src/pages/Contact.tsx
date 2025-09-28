import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
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
  MessageCircle,
} from "lucide-react";
import teamLogistics from "@/assets/team-logistics.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import LocationSection from "@/components/LocationSection";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.name || data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.subject || data.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }
    if (!data.message || data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      toast({
        title: "Please check your input",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@logitrans.com", "support@logitrans.com"],
      description: "Send us your questions anytime",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Logistics Avenue", "Business District, NY 10001"],
      description: "Visit our main office",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      description: "We're here when you need us",
    },
  ];

  const quickContact = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "For general questions about our services",
      action: "Send Message",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Need help with existing shipments",
      action: "Get Support",
    },
    {
      icon: Building,
      title: "Business Partnerships",
      description: "Interested in partnering with us",
      action: "Partner With Us",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Fully Responsive */}
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
              Ready to optimize your supply chain? Get in touch with our
              logistics experts and discover how we can help streamline your
              operations.
            </p>
            {/* <Button
              size="lg"
              variant="outline"
              className="btn-scale btn-glow bg-white text-primary hover:bg-white/90"
            >
              Start Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button> */}
             {/* Mouse scroll animation */}
          <div className="flex justify-center my-16">
            <div className="mouse-scroll-indicator">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <div className="scroll-text text-white/70 text-sm mt-2">
                Scroll Down
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Main Content - Contact Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Get In Touch
              </span>
            </div>
            {/* <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Any question or remarks? Just write us a message!
            </h2> */}
          </div>

          {/* Contact Card */}
          <Card className="border-0 shadow-2xl bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Side - Contact Information (Orange Theme) */}
              <div className="lg:col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 p-8 lg:p-12 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Contact Information
                  </h3>
                  <p className="text-orange-100 mb-8 text-sm leading-relaxed">
                    Say something to start a live chat!
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-white">+92 3168622164</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-white">
                        +92 3365009343{" "}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-white">
                        sidra-khadid@wws-logistics.com
                      </span>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-1">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-sm leading-relaxed text-white">
                        D-14 Block, Gulshan e Iqbal, <br /> Karachi, Pakistan
                      </div>
                    </div>
                  </div>

                  {/* Decorative Circles */}
                  <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/5 rounded-full"></div>
                  <div className="absolute bottom-16 right-16 w-20 h-20 bg-white/10 rounded-full"></div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-gray-700"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="First Name"
                        className={`h-12 border-0 border-b-2 rounded-none ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } focus:border-primary focus:ring-0 bg-transparent px-0`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="h-12 border-0 border-b-2 border-gray-300 rounded-none focus:border-primary focus:ring-0 bg-transparent px-0"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className={`h-12 border-0 border-b-2 rounded-none ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } focus:border-primary focus:ring-0 bg-transparent px-0`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+92 3168622164"
                        className="h-12 border-0 border-b-2 border-gray-300 rounded-none focus:border-primary focus:ring-0 bg-transparent px-0"
                      />
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium text-gray-700">
                      Select Subject?
                    </Label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        "General Inquiry",
                        "Customer Support",
                        "Business Partnerships",
                      ].map((subject) => (
                        <label
                          key={subject}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="subject"
                            value={subject}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                          />
                          <span className="text-sm text-gray-700">
                            {subject}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message.."
                      rows={4}
                      className={`border-0 border-b-2 rounded-none resize-none ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } focus:border-primary focus:ring-0 bg-transparent px-0`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-gray-800 text-white px-8 py-3 rounded-md transform hover:scale-105 transition-all duration-200"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>

      

      {/* Quick Contact Options - Responsive */}
      {/* <div className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full mb-4 w-fit">
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2" />
                <span className="text-xs sm:text-sm font-medium text-primary">
                  Quick Actions
                </span>
              </div>
              <CardTitle className="text-lg sm:text-xl">
                Quick Contact
              </CardTitle>
              <p className="text-gray-600 text-xs sm:text-sm">
                Choose your preferred method
              </p>
            </CardHeader>

            <CardContent className="space-y-3 sm:space-y-4">
              {quickContact.map((option, index) => (
                <div
                  key={option.title}
                  className="p-4 sm:p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {option.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                        {option.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 sm:h-9 text-xs sm:text-sm border-blue-200 hover:border-blue-300 hover:bg-primary/10 transform hover:scale-105 transition-all duration-200"
                      >
                        {option.action}
                        <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div> */}

      {/* Map/Location Section - Responsive */}
      {/* <section className="bg-gray-100 relative">
        <div className="absolute inset-0 opacity-5">
          <div
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full mb-4">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2" />
                <span className="text-xs sm:text-sm font-medium text-primary">
                  Find Us
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Visit Our Office
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
                Located in the heart of the business district, our office is
                easily accessible and equipped with modern facilities to serve
                your logistics needs.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20">
              <div className="h-64 sm:h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                
                <div className="absolute inset-0 opacity-10">
                  <div
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                <div className="text-center relative z-10 px-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-hover rounded-3xl flex items-center justify-center mx-auto mb-6 icon-float">
                    <MapPin className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
                    Our Location
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    123 Logistics Avenue, Business District
                    <br />
                    New York, NY 10001
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 sm:h-10 border-blue-200 hover:border-blue-300 hover:bg-primary/10 transform hover:scale-105 transition-all duration-200"
                    >
                      Get Directions
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 sm:h-10 hover:bg-primary/10 transform hover:scale-105 transition-all duration-200"
                    >
                      Call Now
                      <Phone className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <LocationSection />
      
    </div>
  );
};

export default Contact;
