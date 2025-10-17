"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Heart,
  Globe,
  Users,
  Gamepad2,
  Music,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        "Golang",
        "JavaScript/TypeScript",
        "Python",
        "Java",
        "Solidity",
        "Shell Script",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Gin-Gonic", "Node.js", "gRPC", "REST APIs", "Hardhat"],
    },
    {
      category: "AI & Blockchain",
      items: ["AI SDK", "LangGraph", "LangChain", "Ethereum", "Aptos", "Web3", "DeFi", "dApp Integrations"],
    },
    {
      category: "DevOps & Cloud",
      items: [
        "Docker",
        "AWS EC2",
        "Google Cloud",
        "GitHub Actions",
        "Kubernetes",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
  ];

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code with proper architecture and design patterns.",
    },
    {
      icon: Globe,
      title: "AI & Web3 Integration",
      description:
        "Building AI-powered applications with blockchain integrations that shape the future of technology.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed and efficiency, from backend APIs to frontend interfaces.",
    },
    {
      icon: Users,
      title: "Open Source",
      description:
        "Contributing to the developer community and believing in the power of collaborative development.",
    },
  ];

  const interests = [
    { icon: Music, name: "Guitar & Music Production" },
    { icon: Gamepad2, name: "Gaming" },
    { icon: Heart, name: "Basketball & Football" },
    { icon: Code, name: "Arch Linux Enthusiast" },
  ];

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate software engineer building cutting-edge applications and contributing to open-source projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-4 text-foreground">
              My Journey
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
              <p>
                Software Engineer at AFT Group with 2+ years experience in full-stack development, AI tooling, and blockchain integrations.
              </p>
              <p>
                Worked on diverse projects from authentication middleware to complete backend systems for launchpad marketplaces.
              </p>
              <p>
                When not coding: guitar, music production, sports, gaming, and contributing to developer communities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-xl"
              >
                <h4 className="text-sm font-semibold mb-2 text-primary">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-1">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-xs text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="glass p-4 rounded-xl text-center group hover:border-primary/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-base font-semibold mb-2 text-foreground">
                  {value.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Interests - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Beyond Coding
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass p-4 rounded-xl text-center group hover:border-primary/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                  <interest.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-xs font-medium text-foreground">
                  {interest.name}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="glass p-4 rounded-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong className="text-foreground">Location:</strong>
                <br />
                <span className="text-muted-foreground">Maharashtra, India</span>
              </div>
              <div>
                <strong className="text-foreground">Education:</strong>
                <br />
                <span className="text-muted-foreground">BE Computer Engineering</span>
              </div>
              <div>
                <strong className="text-foreground">Philosophy:</strong>
                <br />
                <span className="text-muted-foreground">Open-source advocate, always experimenting with emerging technologies</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
