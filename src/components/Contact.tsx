import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  Phone,
  Github as GitHub,
  Linkedin,
} from "lucide-react";

const GETFORM_ENDPOINT = "https://getform.io/f/adrgynqa";

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    const payload = new FormData(formRef.current);
    try {
      const res = await fetch(GETFORM_ENDPOINT, {
        method: "POST",
        body: payload,
      });
      if (!res.ok) throw new Error("Submission failed");
      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      formRef.current.reset();
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch {
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="heading">Get In Touch</h2>
          <p className="max-w-2xl mx-auto subheading">
            Let&apos;s collaborate on your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="mb-6 text-2xl font-bold text-text-primary">
              Send a Message
            </h3>

            {formSubmitted ? (
              <div className="p-4 text-center rounded-lg bg-success/20">
                <p className="text-text-primary">
                  Thanks for your message! I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                action={GETFORM_ENDPOINT}
                method="POST"
                className="space-y-4"
              >
                {/* honeypot */}
                <input type="hidden" name="_gotcha" value="" />

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-text-secondary"
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
                    className="w-full px-4 py-2 border rounded-md bg-background border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-text-secondary"
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
                    className="w-full px-4 py-2 border rounded-md bg-background border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-text-secondary"
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
                    className="w-full px-4 py-2 border rounded-md resize-none bg-background border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full btn"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 mr-2 border-2 rounded-full border-background border-t-transparent animate-spin" />
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
            <div className="mb-6 card">
              <h3 className="mb-6 text-2xl font-bold text-text-primary">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="p-2 mr-4 rounded-full bg-secondary">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-text-secondary">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="break-all transition-colors text-text-primary hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="break-all text-text-primary">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="mb-6 text-2xl font-bold text-text-primary">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 transition-colors rounded-lg bg-secondary/50 hover:bg-secondary"
                  >
                    <div className="p-2 mr-4 rounded-full bg-primary/20">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">
                        {social.platform}
                      </h4>
                      <p className="text-sm text-text-secondary">
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
          className="mt-24 text-center text-text-secondary"
        >
          <p>© {new Date().getFullYear()} Abdul Rehman. All rights reserved.</p>
          <p className="mt-1 text-sm">
            Crafted with Next.js, Three.js, Tailwind CSS and 💓
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
