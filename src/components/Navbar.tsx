import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Code } from "lucide-react";

const navLinks = [
  { title: "Home", id: "#home" },
  { title: "About", id: "#about" },
  { title: "Projects", id: "#projects" },
  { title: "Experience", id: "#experience" },
  { title: "Contact", id: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center group">
              <Code className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold text-xl ml-2 gradient-text">
                Abdul Rehman
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.id}
                  className={`nav-link ${
                    activeSection === link.id.substring(1)
                      ? "text-primary before:w-full"
                      : ""
                  }`}
                >
                  {link.title}
                </a>
              ))}
              <div className="h-6 w-px bg-primary/20 mx-2" />
              <a
                href="https://github.com/abdulrehmanwaseem"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/abdulrehmanwaseem"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-primary hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                  activeSection === link.id.substring(1)
                    ? "text-primary bg-primary/10"
                    : "text-text-primary hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.title}
              </a>
            ))}
            <div className="flex space-x-4 px-3 py-2">
              <a
                href="https://github.com/abdulrehmanwaseem"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/abdulrehmanwaseem"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
