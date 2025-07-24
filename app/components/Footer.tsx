"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Send,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0"
          >
            <span>© 2025 Punarv Pawade. Made with</span>
            <Heart size={16} className="text-accent fill-current" />
            <span>and lots of code.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <nav className="flex space-x-6">
              {[
                {
                  name: "GitHub",
                  href: "https://github.com/inciner8r",
                  icon: Github,
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/punarvpawade/",
                  icon: Linkedin,
                },
                {
                  name: "Twitter",
                  href: "https://x.com/inciner8rz",
                  icon: Twitter,
                },
                {
                  name: "Telegram",
                  href: "https://t.me/inciner8r",
                  icon: Send,
                },
                {
                  name: "Discord",
                  href: "https://discord.com/users/569047479140483082",
                  icon: MessageCircle,
                },
                { name: "Contact", href: "#contact", icon: Mail },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <item.icon size={16} />
                  <span className="hidden sm:inline">{item.name}</span>
                </motion.a>
              ))}
            </nav>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 glass rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:border-primary/20"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </motion.div>
        </div>

        {/* Additional footer info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-border/30 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Software Engineer | Blockchain Developer | Open Source Advocate
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Building the future with Golang, React, and Web3 technologies
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
