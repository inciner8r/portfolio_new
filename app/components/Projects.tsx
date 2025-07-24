'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Award, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'PolyPass - Password Manager',
      description: 'A decentralized password manager extension built for ETHGlobal 2023. Features encrypted password storage on Polybase with autofill functionality for secure password management across web applications.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Polybase', 'Browser Extension'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: true,
      award: 'ETHGlobal 2023 Participant'
    },
    {
      id: 2,
      title: 'AirNFT - NFT Marketplace',
      description: 'A comprehensive platform for launching NFT collections and gaming assets built on Aptos blockchain. Features full-stack development with smart contract integration and data indexing from Aptos Network.',
      image: '/api/placeholder/600/400',
      technologies: ['ReactJS', 'Golang', 'Aptos', 'Smart Contracts'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: true,
      award: 'Aptos RandomHack'
    },
    {
      id: 3,
      title: 'GitSplit - Open Source Funding',
      description: 'A crypto donation platform for open source projects with smart contract development for automatic fund splitting. Full-stack implementation with blockchain integration for transparent funding.',
      image: '/api/placeholder/600/400',
      technologies: ['NextJS', 'Golang', 'Solidity', 'AWS', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: true
    },
    {
      id: 4,
      title: 'Virtue Gaming - On-chain Game',
      description: 'An innovative on-chain bingo game built on Aptos blockchain with smart contract integration and automated gas payments for seamless gaming experience.',
      image: '/api/placeholder/600/400',
      technologies: ['Aptos', 'Smart Contracts', 'Move Language'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: false,
      award: 'Aptos RandomHack'
    },
    {
      id: 5,
      title: 'Custom Linux Kernel',
      description: 'Custom kernel development for Asus Zenfone Max Pro M1 with device driver integration, performance optimization, and automated compilation system.',
      image: '/api/placeholder/600/400',
      technologies: ['C', 'Makefile', 'Shell Scripting', 'Linux Kernel'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2022',
      featured: false
    },
    {
      id: 6,
      title: 'Erebrus - Auth Middleware',
      description: 'Authentication middleware for gRPC endpoints with central gateway for VPN nodes and peer discovery using libp2p protocol.',
      image: '/api/placeholder/600/400',
      technologies: ['Golang', 'gRPC', 'libp2p', 'VPN'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my blockchain and full-stack development work, featuring hackathon winners, 
            open-source contributions, and innovative solutions to real-world problems.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group overflow-hidden rounded-2xl"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                    <span className="text-muted-foreground">Project Screenshot</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-card rounded-full text-card-foreground hover:bg-card/90 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                  {project.award && (
                    <>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                      <div className="flex items-center space-x-1">
                        <Award size={14} className="text-accent" />
                        <span className="text-sm text-accent font-medium">{project.award}</span>
                      </div>
                    </>
                  )}
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl group hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{project.date}</span>
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
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted/20 text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Let's Build Something Amazing Together</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, hackathons, 
              or collaborating on open-source contributions. Let's create the next big thing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="https://github.com/inciner8r"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={16} />
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