import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      window.emailjs.init("YOUR_PUBLIC_KEY");
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
      newErrors.lastName = "Last name must be at least 2 characters";
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
      const serviceID = 'service_ful7ee6';
      const templateID = 'template_htesbw9';
      const publicKey = 'gFOuyiNbhD3diYtlB';

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
      };

      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly at info@wws-logistics.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const contactItems = [
    { icon: Phone, text: "(021) 3430 5577" },
    { icon: Mail, text: "info@wws-logistics.com" },
    { icon: MapPin, text: "Address: Z-102, Ground Floor, \nBlock-7 & 8, Shaheed-e- Millat, Karachi." }
  ];

  const subjects = [
    "General Inquiry",
    "Customer Support",
    "Business Partnerships"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="relative section-padding bg-cover bg-center bg-no-repeat parallax-bg"
        style={{ backgroundImage: `url(${globalNetwork})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-orange-600/80 to-orange-500/85 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] z-10" />

        <div className="relative z-20 container-width">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center px-5 py-2.5 bg-white/20 glass rounded-full mb-6 backdrop-blur-md border border-white/30"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5 text-orange-200 mr-2 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">Get In Touch</span>
            </motion.div>

            <motion.h1 
              className="mb-6 text-white font-bold drop-shadow-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Contact Us
            </motion.h1>

            <motion.p 
              className="text-xl text-white max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Ready to optimize your supply chain? Get in touch with our
              logistics experts and discover how we can help streamline your
              operations.
            </motion.p>

            <motion.div 
              className="flex justify-center my-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div 
                className="mouse-scroll-indicator cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <div className="mouse">
                  <div className="wheel"></div>
                </div>
                <div className="scroll-text text-white font-medium text-xs mt-2 tracking-wider">
                  SCROLL DOWN
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </motion.section>

      {/* Main Content - Contact Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <MessageCircle className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Get In Touch
              </span>
            </motion.div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="border-0 shadow-2xl bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left Side - Contact Information */}
                <motion.div 
                  className="lg:col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 p-8 lg:p-12 text-white relative overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
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
                    <motion.h3 
                      className="text-2xl font-bold mb-2 text-white"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Contact Information
                    </motion.h3>
                    <motion.p 
                      className="text-orange-100 mb-8 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Say something to start a live chat!
                    </motion.p>

                    {/* Contact Details */}
                    <motion.div 
                      className="space-y-6"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {contactItems.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4"
                          variants={itemVariants}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-1">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm text-white whitespace-pre-line leading-relaxed">
                            {item.text}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Decorative Circles */}
                    <motion.div 
                      className="absolute bottom-8 right-8 w-32 h-32 bg-white/5 rounded-full"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.3, 0.5]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    ></motion.div>
                    <motion.div 
                      className="absolute bottom-16 right-16 w-20 h-20 bg-white/10 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 0.4, 0.7]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    ></motion.div>
                  </div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.div 
                  className="lg:col-span-3 p-8 lg:p-12"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
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
                          <motion.p 
                            className="text-red-500 text-xs"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.firstName}
                          </motion.p>
                        )}
                      </motion.div>

                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
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
                      </motion.div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
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
                          <motion.p 
                            className="text-red-500 text-xs"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </motion.div>

                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="h-12 border-0 border-b-2 border-gray-300 rounded-none focus:border-primary focus:ring-0 bg-transparent px-0"
                        />
                      </motion.div>
                    </div>

                    {/* Subject Selection */}
                    <motion.div className="space-y-4" variants={itemVariants}>
                      <Label className="text-sm font-medium text-gray-700">
                        Select Subject?
                      </Label>
                      <div className="flex flex-wrap gap-4">
                        {subjects.map((subject) => (
                          <motion.label
                            key={subject}
                            className="flex items-center space-x-2 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
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
                          </motion.label>
                        ))}
                      </div>
                      {errors.subject && (
                        <motion.p 
                          className="text-red-500 text-xs"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.subject}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Message */}
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
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
                        <motion.p 
                          className="text-red-500 text-xs"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div 
                      className="flex justify-end pt-6"
                      variants={itemVariants}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-primary hover:bg-primary-800 text-white px-8 py-3 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.form>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <LocationSection />

      <style>{`
        .mouse-scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mouse {
          width: 26px;
          height: 42px;
          border: 2px solid rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .wheel {
          width: 4px;
          height: 8px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          animation: scroll 1.5s infinite;
        }

        @keyframes scroll {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(12px); }
        }
      `}</style>
    </div>
  );
};

export default Contact;