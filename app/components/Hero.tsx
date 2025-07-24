'use client';

import { motion, circOut } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: circOut
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-primary/10"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-accent/10"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        {/* Avatar */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/avatar.jpg"
              alt="Punarv Pawade"
              fill
              className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
              priority
              onError={(e) => {
                // Fallback to a default avatar if image doesn't exist
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iNjQiIGZpbGw9IiNGM0Y0RjYiLz4KPHN2ZyB4PSIzMiIgeT0iMzIiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2Mzc0OEUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KPHN2ZyB4PSIzMiIgeT0iMzIiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2Mzc0OEUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KPHN2ZyB4PSIzMiIgeT0iMzIiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2Mzc0OEUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KPHBhdGggZD0iTTIwIDIxdi0yYTQgNCAwIDAgMC00LTRIOGE0IDQgMCAwIDAtNCA0djIiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+';
              }}
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-primary text-lg font-medium">Hello, I'm</span>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
        >
          Punarv Pawade
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-muted-foreground mb-8"
        >
          Software Engineer | Blockchain Developer
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Software Engineer with 2+ years of experience in full-stack development and blockchain technologies. 
          Currently working at AFT Group, specialized in building scalable web applications, smart contracts, 
          and decentralized systems using modern technologies like Golang, React, and various blockchain platforms.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            View My Work
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Let's Connect
          </motion.a>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com/inciner8r', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/punarvpawade/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:punarvpawade17@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : '_self'}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-full text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;