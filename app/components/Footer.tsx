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
} from "lucide-react";

// Custom Discord Icon Component
const DiscordIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

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
                  icon: DiscordIcon,
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
