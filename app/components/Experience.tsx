'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'AFT Group',
      position: 'Software Engineer | AI Integration Specialist',
      location: 'Remote',
      duration: 'Dec 2024 - Present',
      type: 'Full-time',
      description: 'Leading AI integration and full-stack development for multi-tenant applications. Built intelligent systems using modern AI frameworks and optimized high-traffic applications.',
      achievements: [
        'Integrated AI SDK, LangGraph, and LangChain for intelligent automation',
        'Built ML-based recommendation systems processing 1.5L+ records',
        'Developed multi-tenant Next.js applications with Python backends',
        'Optimized cloud infrastructure on AWS and Hetzner platforms',
        'Implemented AI-powered webhook management and API optimization'
      ],
      technologies: ['Next.js', 'Python', 'AI SDK', 'LangGraph', 'LangChain', 'Machine Learning', 'AWS', 'Multi-tenant Architecture'],
      website: '#',
      projects: [
        {
          name: 'AI-Powered Storefront',
          description: 'Multi-tenant platform with intelligent recommendations and automation'
        },
        {
          name: 'ML Optimization Engine',
          description: 'Processed 1.5L+ vehicle records with AI-driven performance improvements'
        }
      ]
    },
    {
      id: 2,
      company: 'MetabotAI',
      position: 'Software Engineer | Trading & DeFi Integration',
      location: 'Remote',
      duration: 'Jun 2024 - Dec 2024',
      type: 'Full-time',
      description: 'Built AI-powered trading systems and DeFi integrations. Developed high-speed trading bots and cross-chain swap functionality.',
      achievements: [
        'Created AI-driven Telegram trading bot with real-time market analysis',
        'Built comprehensive indexer for Solana and EVM tokens',
        'Implemented multi-protocol DeFi integrations (1inch, Uniswap, Jupiter)',
        'Developed responsive trading UI with real-time data visualization',
        'Optimized algorithms for high-frequency trading operations'
      ],
      technologies: ['AI Trading', 'Telegram Bot API', 'Solana', 'EVM', 'DeFi Protocols', 'React', 'Node.js', 'Web3'],
      website: '#',
      projects: [
        {
          name: 'AI Trading Bot',
          description: 'Intelligent trading system with market analysis and automated execution'
        },
        {
          name: 'Cross-Chain DeFi Platform',
          description: 'Multi-protocol integration for seamless token swapping'
        }
      ]
    },
    {
      id: 3,
      company: 'Lazarus Network',
      position: 'Full Stack Developer | AI & dApp Integration',
      location: 'Remote',
      duration: 'Apr 2023 - May 2024',
      type: 'Full-time',
      description: 'Full-stack development with AI integration and dApp connectivity. Built authentication systems, AI-powered Discord bots, and blockchain-integrated platforms.',
      achievements: [
        'Built AI-powered Discord bot with Midjourney, DALLE2, and ChatGPT integration',
        'Developed authentication middleware for gRPC endpoints with libp2p peer discovery',
        'Created dApp integration platform with Ethereum/Aptos wallet authentication',
        'Built complete backend for launchpad/marketplace with blockchain connectivity',
        'Implemented automated VPN+Firewall deployment with Stripe subscriptions'
      ],
      technologies: ['AI Integration', 'Golang', 'Node.js', 'NextJS', 'ReactJS', 'AWS', 'Docker', 'gRPC', 'Web3', 'dApp Development'],
      website: '#',
      projects: [
        {
          name: 'AI Discord Bot',
          description: 'Multi-AI integration with Midjourney, DALLE2, and ChatGPT for automated content generation'
        },
        {
          name: 'dApp Integration Platform',
          description: 'Complete ecosystem for blockchain application connectivity and authentication'
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full-stack engineering with AI integration, dApp development, and modern web technologies.
          </p>
        </motion.div>

        {/* Compact Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass p-6 rounded-2xl hover:border-primary/20 transition-all duration-300 h-full"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        experience.type === 'Full-time' 
                          ? 'bg-primary/10 text-primary border border-primary/20' 
                          : 'bg-accent/10 text-accent border border-accent/20'
                      }`}>
                        {experience.type}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{experience.position}</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">{experience.company}</h4>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-3">
                      <MapPin size={12} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <a
                    href={experience.website}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                {/* Key Projects - Compact */}
                {experience.projects && (
                  <div className="mb-4">
                    <h5 className="text-xs font-semibold mb-2 text-foreground">Key Projects:</h5>
                    <div className="space-y-2">
                      {experience.projects.map((project, idx) => (
                        <div key={idx} className="bg-muted/10 p-3 rounded-lg border border-muted/20">
                          <h6 className="font-semibold text-accent text-sm mb-1">{project.name}</h6>
                          <p className="text-xs text-muted-foreground">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies - Compact */}
                <div>
                  <h5 className="text-xs font-semibold mb-2 text-foreground">Technologies:</h5>
                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted/20 text-muted-foreground rounded border border-muted/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* AI & Tech Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">AI & Modern Tech Focus</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">AI Integration</h4>
              <p className="text-sm text-muted-foreground">LangChain, LangGraph, AI SDK, ML systems, and intelligent automation</p>
            </div>
            
            <div className="glass p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Full-Stack Development</h4>
              <p className="text-sm text-muted-foreground">Next.js, Python, dApp integrations, and modern web technologies</p>
            </div>

            <div className="glass p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Open Source & Hackathons</h4>
              <p className="text-sm text-muted-foreground">ETHGlobal participant, GitHub contributor, and blockchain hackathon winner</p>
            </div>
          </div>
        </motion.div>

        {/* Compact Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass p-6 rounded-2xl max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-foreground">Ready to Build Something Amazing?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Passionate about AI integration, full-stack development, and innovative solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-300 inline-block"
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;