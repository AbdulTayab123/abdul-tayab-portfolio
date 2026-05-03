import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectsNew = () => {
  const projects = [
    {
      id: 1,
      title: 'AutoApplyPro',
      category: 'AI/ML Platform',
      description: 'AI-powered job search and recruitment platform featuring smart resume builder, automated job matching, real-time notifications, and comprehensive employer dashboard.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      tags: ['AI/ML', 'React', 'Node.js', 'MongoDB', 'Python'],
      featured: true,
      gradient: 'from-purple-500 to-pink-600',
      stats: { users: '10K+', uptime: '99.9%' }
    },
    {
      id: 2,
      title: 'University Management System',
      category: 'Desktop Application',
      description: 'Comprehensive JavaFX application streamlining student enrollment, search functionalities, and data management with an intuitive interface.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
      tags: ['Java', 'JavaFX', 'MySQL', 'CRUD'],
      featured: true,
      gradient: 'from-primary-500 to-cyan-600',
      stats: { students: '5K+', institutions: '50+' }
    },
    {
      id: 3,
      title: 'DelishDine - Food Ordering App',
      category: 'Mobile App',
      description: 'User-friendly food ordering application featuring real-time order tracking, secure payment integration, and an intuitive interface for seamless dining experience.',
      image: 'https://images.unsplash.com/photo-1504674900950-18bea62dc245?w=600&h=400&fit=crop',
      tags: ['Flutter', 'Firebase', 'Payment', 'Real-time'],
      featured: false,
      gradient: 'from-green-500 to-emerald-600',
      stats: { orders: '50K+', restaurants: '200+' }
    },
    {
      id: 4,
      title: 'Infix Postfix Calculator',
      category: 'Data Structures',
      description: 'Advanced calculator implementing stack data structure for converting infix expressions to postfix notation and evaluating mathematical expressions.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      tags: ['Data Structures', 'Algorithms', 'C', 'Stack'],
      featured: false,
      gradient: 'from-orange-500 to-red-600',
      stats: { operations: 'Unlimited', precision: '99.99%' }
    },
    {
      id: 5,
      title: 'Car Speed Detector System',
      category: 'IoT & Embedded',
      description: 'Radar and laser-based speed detection system for accurately measuring vehicle speeds, enhancing road safety and traffic management capabilities.',
      image: 'https://images.unsplash.com/photo-1552883958-7cb0bf27c6f5?w=600&h=400&fit=crop',
      tags: ['IoT', 'Embedded', 'C', 'Hardware'],
      featured: false,
      gradient: 'from-blue-500 to-indigo-600',
      stats: { accuracy: '99.8%', range: '300m' }
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
          </motion.div>
          <motion.p variants={itemVariants} className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Showcasing cutting-edge solutions in AI/ML, full-stack development, mobile apps, and IoT systems
          </motion.p>
        </motion.div>

        {/* Featured Projects (2 large cards) */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden glass-effect border border-slate-700/50 hover:border-primary-500/50 transition-all"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-primary-500/90 backdrop-blur-sm rounded-full">
                  <Star size={16} className="fill-current" />
                  <span className="text-sm font-semibold">Featured</span>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-around text-center text-white">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-xl font-bold text-primary-400">{value}</div>
                      <div className="text-xs text-slate-300 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700/50 text-slate-300 hover:bg-primary-500/20 hover:text-primary-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href="https://github.com/AbdulTayab123"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2.5 glass-effect rounded-lg text-white text-sm font-semibold hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.filter(p => !p.featured).map((project) => (
            <motion.div
              key={project.id}
              className="group relative rounded-xl overflow-hidden glass-effect border border-slate-700/50 hover:border-primary-500/50 transition-all h-full flex flex-col"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Compact Image */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-1 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-4 border-t border-slate-700/50">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 px-3 py-1.5 bg-primary-500/20 text-primary-300 rounded text-xs font-semibold hover:bg-primary-500/40 transition-all text-center"
                  >
                    Demo
                  </motion.a>
                  <motion.a
                    href="https://github.com/AbdulTayab123"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 px-3 py-1.5 bg-slate-700/30 text-slate-300 rounded text-xs font-semibold hover:bg-slate-700/50 transition-all text-center"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-slate-400 mb-4">Explore more projects on GitHub</p>
          <motion.a
            href="https://github.com/AbdulTayab123"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/40 transition-all"
          >
            <Github size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsNew;
