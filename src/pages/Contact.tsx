import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import teamLogistics from "@/assets/team-logistics.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import LocationSection from "@/components/LocationSection";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS with your public key
      window.emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.firstName || data.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }
     if (!data.lastName || data.lastName.trim().length < 2) {
      newErrors.lastName = "First name must be at least 2 characters";
    }
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (data.phone && !/^\d{11,12}$/.test(data.phone)) {
      newErrors.phone = "Phone number must be 11 or 12 digits";
    }
    if (!data.subject) {
      newErrors.subject = "Please select a subject";
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
      // EmailJS configuration - Replace these with your actual values
      const serviceID = 'YOUR_SERVICE_ID';
      const templateID = 'template_htesbw9'; // Replace with your EmailJS Template ID
      const publicKey = 'gFOuyiNbhD3diYtlB'; // Replace with your EmailJS Public Key



      // Prepare email parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
        
      };

      const response = await emailjs.send(serviceID, templateID, templateParams,publicKey);

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ firstName: "", lastName:"", email: "", phone:"", subject: "", message: "" });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly at  info@wws-logistics.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
          </div>

          {/* Contact Card */}
          <Card className="border-0 shadow-2xl bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Side - Contact Information (Orange Theme) */}
              <div className="lg:col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 p-8 lg:p-12 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
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
                      <span className="text-sm text-white">+92 3365009343</span>
                    </div>

                   

                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-white">
                         info@wws-logistics.com
                      </span>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-1">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-sm leading-relaxed text-white">
                        D-14 Block 2, Gulshan e Iqbal, <br /> Karachi, Pakistan
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
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className={`h-12 border-0 border-b-2 rounded-none ${
                          errors.firstName ? "border-red-500" : "border-gray-300"
                        } focus:border-primary focus:ring-0 bg-transparent px-0`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs">{errors.firstName}</p>
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
                        value={formData.lastName}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
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
                            checked={formData.subject === subject}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                          />
                          <span className="text-sm text-gray-700">
                            {subject}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.subject && (
                      <p className="text-red-500 text-xs">{errors.subject}</p>
                    )}
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
                      className="bg-primary hover:bg-primary-800 text-white px-8 py-3 rounded-md transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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

      <LocationSection />
    </div>
  );
};

export default Contact;