import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Code, Zap } from 'lucide-react';
import * as THREE from 'three';

const HeroNew = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Enhanced 3D Canvas Setup with Mouse Tracking
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;

    // Create torus geometry for interactive 3D element
    const geometry = new THREE.TorusGeometry(2, 0.5, 100, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0066cc,
      metalness: 0.8,
      roughness: 0.2,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Add lighting
    const light1 = new THREE.PointLight(0x0ea5e9, 1.5, 100);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x8b5cf6, 1, 100);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Mouse tracking
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      torus.rotation.x = (e.clientY / window.innerHeight) * Math.PI;
      torus.rotation.y = (e.clientX / window.innerWidth) * Math.PI;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      torus.rotation.y += 0.001;
      torus.rotation.x += 0.0005;
      particles.rotation.y += 0.0002;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-dark-300/50 via-transparent to-dark-300/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm border border-primary-500/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap size={16} className="text-primary-400" />
            <span className="text-primary-300">Welcome to my Portfolio</span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient animate-pulse">Abdul Tayab</span>
          </h1>
        </motion.div>

        {/* Subtitle with Icon */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code size={24} className="text-primary-400" />
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
              Software Engineer | AI/ML Specialist | Full-Stack Developer
            </h2>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Final year BESE student at IQRA University, passionate about creating intelligent solutions 
          that bridge the gap between artificial intelligence and practical applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white font-semibold shadow-lg shadow-primary-500/40 hover:shadow-primary-500/60 transition-all flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-effect rounded-full text-white font-semibold border border-primary-500/30 hover:border-primary-500 transition-all flex items-center justify-center gap-2"
          >
            <Code size={20} />
            View Projects
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/AbdulTayab123"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 glass-effect rounded-full hover:bg-slate-700/50 transition-all text-slate-300 hover:text-primary-400"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 glass-effect rounded-full hover:bg-slate-700/50 transition-all text-slate-300 hover:text-primary-400"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 glass-effect rounded-full hover:bg-slate-700/50 transition-all text-slate-300 hover:text-primary-400"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-primary-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroNew;
