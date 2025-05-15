import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Github as GitHub,
  Linkedin,
  Mail,
  Send,
  MapPin,
  Phone,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset form submission status after 5 seconds
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email",
      value: "abdulrehmanwork2024@gmail.com",
      link: "mailto:abdulrehmanwork2024@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Location",
      value: "Hyderabad, Sindh, Pakistan",
      link: null,
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Phone",
      value: "+92 311811 4805",
      link: "tel:+92 311811 4805",
    },
  ];

  const socialLinks = [
    {
      platform: "GitHub",
      icon: <GitHub className="w-5 h-5" />,
      link: "https://github.com/abdulrehmanwaseem",
      username: "abdulrehmanwaseem",
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://linkedin.com/in/abdulrehmanwaseem",
      username: "abdulrehmanwaseem",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading">Get In Touch</h2>
          <p className="subheading max-w-2xl mx-auto">
            Let&apos;s collaborate on your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Send a Message
            </h3>

            {formSubmitted ? (
              <div className="p-4 bg-success/20 rounded-lg text-center">
                <p className="text-text-primary">
                  Thanks for your message! I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-secondary mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="card mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 bg-secondary rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-text-secondary">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-text-primary hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text-primary">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Connect With Me
              </h3>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="p-2 bg-primary/20 rounded-full mr-4">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="text-text-primary font-medium">
                        {social.platform}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        @{social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-24 text-text-secondary"
        >
          <p>© {new Date().getFullYear()} Abdul Rehman. All rights reserved.</p>
          <p className="text-sm mt-1">
            Crafted with Next.js, Three.js, Tailwind CSS and 💓
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
