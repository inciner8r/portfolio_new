"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Award, Zap } from "lucide-react";
import { Twitter, Send, MessageCircle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 3,
      title: "GitSplit - Open Source Funding",
      description:
        "A crypto donation platform for open source projects with smart contract development for automatic fund splitting. Full-stack implementation with blockchain integration for transparent funding.",
      image: "/gitpslit.png",
      technologies: ["NextJS", "Golang", "Solidity", "AWS", "Docker"],
      liveUrl: "https://ethglobal.com/showcase/gitsplit-pkp5d",
      githubUrl: "https://github.com/orgs/GitSplit-org/repositories",
      date: "2023",
      featured: true,
    },
    {
      id: 1,
      title: "PolyPass - Password Manager",
      description:
        "A decentralized password manager extension built for ETHGlobal 2023. Features encrypted password storage on Polybase with autofill functionality for secure password management across web applications.",
      image: "/polypass.png",
      technologies: ["React", "TypeScript", "Polybase", "Browser Extension"],
      liveUrl: "https://ethglobal.com/showcase/polypass-fg8ru",
      githubUrl: "https://github.com/a-org-b/Poly-Pass-Extension",
      date: "2023",
      featured: true,
      award: "ETHGlobal 2023 Participant",
    },
    {
      id: 2,
      title: "AirNFT - NFT Marketplace",
      description:
        "A comprehensive platform for launching NFT collections and gaming assets built on Aptos blockchain. Features full-stack development with smart contract integration and data indexing from Aptos Network.",
      image: "/api/placeholder/600/400",
      technologies: ["ReactJS", "Golang", "Aptos", "Smart Contracts"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      featured: false,
      award: "Aptos RandomHack",
    },
    {
      id: 4,
      title: "Virtue Gaming - On-chain Game",
      description:
        "An innovative on-chain bingo game built on Aptos blockchain with smart contract integration and automated gas payments for seamless gaming experience.",
      image: "/api/placeholder/600/400",
      technologies: ["Aptos", "Smart Contracts", "Move Language"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      featured: false,
      award: "Aptos RandomHack",
    },
    {
      id: 5,
      title: "Custom Linux Kernel",
      description:
        "Custom kernel development for Asus Zenfone Max Pro M1 with device driver integration, performance optimization, and automated compilation system.",
      image: "/api/placeholder/600/400",
      technologies: ["C", "Makefile", "Shell Scripting", "Linux Kernel"],
      liveUrl: "#",
      githubUrl: "https://github.com/inciner8r/msm-4.4",
      date: "2022",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Blockchain and full-stack development work featuring hackathon winners and innovative solutions.
          </p>
        </motion.div>

        {/* Featured Projects - Compact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar size={14} className="text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {project.date}
                  </span>
                  {project.award && (
                    <>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                      <Award size={12} className="text-accent" />
                    </>
                  )}
                </div>
                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title + " screenshot"}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  <ExternalLink size={14} />
                  <span>Demo</span>
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 border border-primary text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github size={14} />
                  <span>Code</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="glass p-4 rounded-xl group hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar size={12} className="text-primary" />
                    <span className="text-xs text-muted-foreground">
                      {project.date}
                    </span>
                    {project.award && (
                      <>
                        <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                        <Award size={10} className="text-accent" />
                      </>
                    )}
                  </div>
                  <div className="flex space-x-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs bg-muted/20 text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass p-6 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-bold text-foreground">
                Let's Build Something Amazing Together
              </h3>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
              Open to new opportunities, interesting projects, hackathons, and open-source contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 text-sm"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="https://github.com/inciner8r"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-2 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm"
              >
                <Github size={14} />
                <span>View More Projects</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
