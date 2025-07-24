'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'AFT Group',
      position: 'Software Engineer',
      location: 'Remote',
      duration: 'Dec 2024 - Present',
      type: 'Full-time',
      description: 'Working on multi-tenant, multi-domain frontend applications with Next.js and Python backend. Focusing on storefront development, API optimization, webhook management, and solving scaling issues for high-traffic applications.',
      achievements: [
        'Developed multi-tenant, multi-domain frontend storefront using Next.js',
        'Built and optimized Python backend APIs and webhooks for better performance',
        'Solved critical scaling issues for high-traffic applications',
        'Optimized Sun Motors site cron jobs handling >1.5 lakh vehicle records',
        'Implemented ML-based recommendation system for enhanced user experience',
        'Managed cloud infrastructure on AWS and Hetzner/Coolify platforms'
      ],
      technologies: ['Next.js', 'Python', 'AWS', 'Hetzner', 'Coolify', 'Machine Learning', 'Multi-tenant Architecture'],
      website: '#',
      projects: [
        {
          name: 'Multi-tenant Storefront',
          description: 'Next.js frontend with Python backend, supporting multiple domains and tenants'
        },
        {
          name: 'Sun Motors Optimization',
          description: 'Optimized cron jobs processing >1.5 lakh vehicle records with improved performance'
        },
        {
          name: 'ML Recommendation System',
          description: 'Built machine learning-based recommendation system for personalized user experience'
        }
      ]
    },
    {
      id: 2,
      company: 'MetabotAI',
      position: 'Software Engineer',
      location: 'Remote',
      duration: 'Jun 2024 - Dec 2024',
      type: 'Full-time',
      description: 'Developed high-speed trading bot for Telegram, built indexer for new Solana and EVM coins, worked on UI development, and implemented swap functionality using 1inch, Uniswap, and Jupiter protocols.',
      achievements: [
        'Created high-speed Telegram trading bot with real-time market integration',
        'Built comprehensive indexer for new Solana and EVM coins',
        'Developed responsive and intuitive UI for trading applications',
        'Implemented multi-protocol swap functionality (1inch, Uniswap, Jupiter)',
        'Integrated EVM and Solana blockchain networks for cross-chain trading',
        'Optimized trading algorithms for high-frequency operations'
      ],
      technologies: ['Telegram Bot API', 'Solana', 'EVM', '1inch', 'Uniswap', 'Jupiter', 'React', 'Node.js', 'Web3'],
      website: '#',
      projects: [
        {
          name: 'High-Speed Trading Bot',
          description: 'Telegram bot for fast cryptocurrency trading with real-time market data'
        },
        {
          name: 'Coin Indexer',
          description: 'Comprehensive indexing system for new Solana and EVM tokens'
        },
        {
          name: 'Multi-Protocol Swaps',
          description: 'Integrated 1inch, Uniswap, and Jupiter for seamless token swapping'
        }
      ]
    },
    {
      id: 3,
      company: 'Lazarus Network',
      position: 'Developer Intern → Full Stack Developer',
      location: 'Remote',
      duration: 'Apr 2023 - Present',
      type: 'Full-time',
      description: 'Started as Developer Intern and promoted to Full Stack Developer. Responsible for backend development in Golang and Node.js, frontend with NextJS and ReactJS, and managing cloud infrastructure.',
      achievements: [
        'Promoted from intern to full-time developer within the organization',
        'Built Erebrus: Authentication middleware for gRPC endpoints with central gateway',
        'Developed Sotreus: VPN+Firewall deployment with Ethereum/Aptos wallet auth',
        'Created Myriadflow: Complete backend for launchpad/marketplace with smart contracts',
        'Built Airbot: Discord bot with Midjourney, DALLE2, and ChatGPT integration'
      ],
      technologies: ['Golang', 'Node.js', 'NextJS', 'ReactJS', 'AWS EC2', 'Google Cloud', 'Docker', 'GitHub Actions', 'gRPC', 'libp2p', 'Stripe'],
      website: '#',
      projects: [
        {
          name: 'Erebrus',
          description: 'Authentication middleware for gRPC endpoints, central gateway for VPN nodes, peer discovery with libp2p'
        },
        {
          name: 'Sotreus', 
          description: 'Authentication for Ethereum/Aptos wallets, automated VPN+Firewall deployment, user subscriptions with Stripe'
        },
        {
          name: 'Myriadflow',
          description: 'Complete backend for launchpad/marketplace, smart contract deployments, subgraph deployment'
        },
        {
          name: 'Airbot',
          description: 'Discord bot with Midjourney, DALLE2, and ChatGPT integration'
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey through blockchain development, full-stack engineering, 
            and AI integration across innovative companies and cutting-edge projects.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-8 rounded-2xl hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          experience.type === 'Full-time' 
                            ? 'bg-primary/10 text-primary border border-primary/20' 
                            : 'bg-accent/10 text-accent border border-accent/20'
                        }`}>
                          {experience.type}
                        </span>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                      <a
                        href={experience.website}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-foreground">{experience.position}</h3>
                    <h4 className="text-lg font-semibold mb-2 text-primary">{experience.company}</h4>
                    
                    <div className="flex items-center space-x-1 mb-4 text-muted-foreground">
                      <MapPin size={14} />
                      <span className="text-sm">{experience.location}</span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{experience.description}</p>

                    {/* Key Projects for Lazarus Network */}
                    {experience.projects && (
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold mb-3 text-foreground">Key Projects:</h5>
                        <div className="space-y-3">
                          {experience.projects.map((project, idx) => (
                            <div key={idx} className="glass p-4 rounded-xl border border-accent/10">
                              <h6 className="font-semibold text-accent mb-1">{project.name}</h6>
                              <p className="text-sm text-muted-foreground">{project.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h5 className="text-sm font-semibold mb-3 text-foreground">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold mb-3 text-foreground">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Education & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-bold text-foreground">Education</h4>
              </div>
              <h5 className="text-lg font-semibold text-primary mb-2">BE Computer Engineering</h5>
              <p className="text-sm text-muted-foreground">Strong foundation in computer science fundamentals, algorithms, and software engineering principles.</p>
            </div>
            
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-accent mr-3" />
                <h4 className="text-xl font-bold text-foreground">Notable Achievements</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">ETHGlobal Participant: Scaling Ethereum 2023</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Aptos RandomHack: Multiple project submissions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Active GitHub contributor and open-source advocate</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Multiple blockchain hackathon participations</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Always Open to New Opportunities</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm passionate about working on innovative projects, contributing to open-source, 
              and collaborating with talented teams. Let's discuss how we can build something amazing together.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 inline-block"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;