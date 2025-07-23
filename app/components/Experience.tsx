'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Reduced application load time by 40% through optimization techniques',
        'Led a team of 5 developers in successful product launches',
        'Implemented CI/CD pipelines improving deployment efficiency by 60%',
        'Designed and built RESTful APIs handling 1M+ requests daily'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript'],
      website: '#'
    },
    {
      id: 2,
      company: 'Digital Innovations Ltd.',
      position: 'Full Stack Developer',
      location: 'New York, NY',
      duration: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.',
      achievements: [
        'Built 15+ responsive web applications from concept to deployment',
        'Improved code quality by implementing automated testing (95% coverage)',
        'Collaborated with UX/UI designers to enhance user experience',
        'Optimized database queries reducing response time by 50%'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Firebase', 'Sass', 'JavaScript'],
      website: '#'
    },
    {
      id: 3,
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      location: 'Austin, TX',
      duration: '2019 - 2020',
      type: 'Full-time',
      description: 'Joined early-stage startup to build the initial product from ground up. Worked closely with founders to translate business requirements into technical solutions.',
      achievements: [
        'Built the entire frontend architecture for the MVP',
        'Implemented responsive design supporting all device types',
        'Integrated third-party APIs and payment processing systems',
        'Contributed to product strategy and technical decision making'
      ],
      technologies: ['React', 'Redux', 'Material-UI', 'Stripe API', 'Jest', 'Webpack'],
      website: '#'
    },
    {
      id: 4,
      company: 'Freelance',
      position: 'Web Developer',
      location: 'Remote',
      duration: '2018 - 2019',
      type: 'Contract',
      description: 'Provided web development services to small businesses and entrepreneurs. Specialized in creating custom websites and e-commerce solutions.',
      achievements: [
        'Completed 20+ projects for diverse clients across industries',
        'Maintained 100% client satisfaction rate',
        'Delivered all projects on time and within budget',
        'Established long-term partnerships with 5+ recurring clients'
      ],
      technologies: ['WordPress', 'PHP', 'MySQL', 'jQuery', 'Bootstrap', 'WooCommerce'],
      website: '#'
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
            My professional journey through various roles, companies, and projects 
            that have shaped my expertise in full-stack development.
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

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology and development.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;