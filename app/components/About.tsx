'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart, Globe, Users, Coffee, Music } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      category: 'Languages', 
      items: ['Golang', 'JavaScript/TypeScript', 'Python', 'Java', 'Solidity', 'Shell Script'] 
    },
    { 
      category: 'Frontend', 
      items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] 
    },
    { 
      category: 'Backend', 
      items: ['Gin-Gonic', 'Node.js', 'gRPC', 'REST APIs', 'Hardhat'] 
    },
    { 
      category: 'Blockchain', 
      items: ['Ethereum', 'Aptos', 'Smart Contracts', 'Web3', 'DeFi'] 
    },
    { 
      category: 'DevOps & Cloud', 
      items: ['Docker', 'AWS EC2', 'Google Cloud', 'GitHub Actions', 'Kubernetes'] 
    },
    { 
      category: 'Databases', 
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] 
    },
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with proper architecture and design patterns.'
    },
    {
      icon: Globe,
      title: 'Web3 Innovation',
      description: 'Building decentralized applications and smart contracts that shape the future of technology.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency, from backend APIs to frontend interfaces.'
    },
    {
      icon: Users,
      title: 'Open Source',
      description: 'Contributing to the developer community and believing in the power of collaborative development.'
    }
  ];

  const interests = [
    { icon: Music, name: 'Guitar & Music Production' },
    { icon: Coffee, name: 'Counter-Strike: GO' },
    { icon: Heart, name: 'Basketball & Football' },
    { icon: Code, name: 'Arch Linux Enthusiast' },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer who thrives on building cutting-edge applications and contributing to open-source projects. 
            My journey began with traditional web development and evolved into blockchain and decentralized technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Currently working as a Software Engineer at AFT Group, with previous experience at MetabotAI and 
                Lazarus Network. My journey in software development spans over 2+ years, focusing on full-stack 
                development and blockchain technologies.
              </p>
              <p>
                I've worked on diverse projects from building authentication middleware for gRPC endpoints to 
                developing complete backend systems for launchpad marketplaces. My expertise includes working 
                with modern technologies like Golang, React, and various blockchain platforms.
              </p>
              <p>
                When I'm not coding, you'll find me playing guitar, producing music, competing in sports like 
                basketball and football, or gaming on Counter-Strike: Global Offensive. I'm also an Arch Linux 
                user and active contributor to developer communities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h4 className="text-lg font-semibold mb-3 text-primary">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">
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
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">What Drives Me</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl text-center group hover:border-primary/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-12 text-foreground">Beyond Coding</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center group hover:border-primary/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <interest.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">{interest.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 glass p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Location:</strong> Maharashtra, India<br/>
              <strong className="text-foreground">Education:</strong> BE Computer Engineering<br/>
              <strong className="text-foreground">Philosophy:</strong> I believe in the power of open-source software and enjoy experimenting with emerging technologies. Always eager to connect with like-minded developers and work on innovative projects that push the boundaries of technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;