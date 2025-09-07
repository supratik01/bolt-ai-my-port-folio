import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Database, TrendingUp, User, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, Menu, X, CheckCircle, Star, Award, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'contact'];
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } else {
      setFormStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern React & Angular applications with stunning UI/UX design and seamless user experiences.',
      color: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-400'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable Node.js APIs, database design, and server architecture for robust applications.',
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-400'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Tracking',
      description: 'Google Tag Manager implementation, conversion tracking, and performance optimization.',
      color: 'from-green-500 to-teal-500',
      iconColor: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed optimization, SEO enhancement, and technical audits for maximum performance.',
      color: 'from-orange-500 to-red-500',
      iconColor: 'text-orange-400'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack React e-commerce with Node.js backend, Stripe payments, and real-time inventory.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard with real-time data visualization, user management, and subscription billing.',
      tech: ['Angular', 'D3.js', 'Firebase', 'GTM'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Fintech Application',
      description: 'Secure financial platform with advanced authentication, transaction processing, and reporting.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '6+', label: 'Years Experience', icon: Star },
    { number: '30+', label: 'Happy Clients', icon: User },
    { number: '99%', label: 'Success Rate', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  DevMaster
                </span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['hero', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize ${
                      activeSection === item
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {item === 'hero' ? 'Home' : item}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95 backdrop-blur-md">
              {['hero', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 capitalize ${
                    activeSection === item
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {item === 'hero' ? 'Home' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
              <span className="text-green-400 text-sm font-medium">● Available for freelance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Crafting Modern
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full-stack developer specializing in <span className="text-purple-400 font-semibold">React</span>, 
              <span className="text-blue-400 font-semibold"> Angular</span>, 
              <span className="text-green-400 font-semibold"> Node.js</span> & 
              <span className="text-pink-400 font-semibold"> Analytics</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                Start a Project
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-semibold rounded-lg border border-gray-700 transition-all duration-300 hover:bg-gray-700 hover:border-gray-600"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Profile Photo Container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm p-2 rounded-2xl border border-gray-700">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Professional Developer Portrait"
                      className="w-full h-80 object-cover rounded-xl"
                    />
                    {/* Online Status Indicator */}
                    <div className="absolute top-4 right-4 flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-700">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">Available</span>
                    </div>
                  </div>
                </div>
                
                {/* Professional Badges */}
                <div className="flex justify-center space-x-4 mt-6">
                  <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                    <span className="text-purple-400 text-sm font-medium">✓ Verified Developer</span>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                    <span className="text-cyan-400 text-sm font-medium">⭐ Top Rated</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-white mb-6">
                6+ Years of Digital Innovation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer who transforms ideas into powerful digital solutions. 
                With over 6 years of experience, I specialize in creating modern, scalable applications 
                that drive real business results.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans the entire development lifecycle - from crafting pixel-perfect 
                user interfaces to building robust backend systems and implementing advanced analytics 
                that provide actionable insights.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    Frontend
                  </div>
                  <div className="text-gray-400 text-sm">React, Angular, Vue.js</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    Backend
                  </div>
                  <div className="text-gray-400 text-sm">Node.js, Express, APIs</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 order-3 lg:col-span-2">
              <h4 className="text-2xl font-bold text-white mb-6">Why Choose Me?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Quality-Driven Development</h5>
                    <p className="text-gray-400 text-sm">Clean, maintainable code with comprehensive testing and documentation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Results-Focused Approach</h5>
                    <p className="text-gray-400 text-sm">Every project is designed to achieve your specific business objectives.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Cutting-Edge Technology</h5>
                    <p className="text-gray-400 text-sm">Always using the latest tools and best practices in web development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  <div className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:underline`}>
                    Learn More →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recent projects showcasing my technical expertise and creative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}>
                    <ExternalLink className="h-8 w-8 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your vision to life? Let's discuss your next project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">hello@devmaster.dev</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Available Worldwide (Remote)</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:border-transparent transition-all duration-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 ${
                      errors.name ? 'border-red-400 bg-red-500/10' : 'border-gray-600'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 ${
                      errors.email ? 'border-red-400 bg-red-500/10' : 'border-gray-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-vertical text-white placeholder-gray-400 ${
                      errors.message ? 'border-red-400 bg-red-500/10' : 'border-gray-600'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                DevMaster
              </span>
            </h3>
            <p className="text-gray-400 mb-6">
              Crafting modern digital experiences with expertise & precision
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                &copy; 2024 DevMaster. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;