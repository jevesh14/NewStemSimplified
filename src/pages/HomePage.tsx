import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { ChevronRight, Zap, Microscope, Gamepad2, Atom, Brain, Sparkles, ArrowRight, Play, BookOpen, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Create particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 4
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Breakthrough Briefs',
      description: 'Quick summaries of the latest scientific discoveries',
      color: 'from-blue-500 to-cyan-500',
      link: '/articles'
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Deep Dive Articles',
      description: 'Comprehensive explanations of complex concepts',
      color: 'from-purple-500 to-pink-500',
      link: '/articles'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Interactive Games',
      description: 'Learn through fun, engaging activities',
      color: 'from-green-500 to-teal-500',
      link: '/games'
    }
  ];

  return (
    <div className="homepage relative overflow-hidden">
      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        
        <AnimatedSection className="text-center px-6 max-w-6xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-8">
              <Sparkles className="w-5 h-5 text-blue-500 mr-2 animate-pulse" />
              <span className="text-blue-700 font-semibold">Making Science Accessible for Everyone</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 gradient-text leading-tight">
            STEM Simplified
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Bite-sized breakthroughs and brainy fun — explained for everyone.
            <br />
            <span className="text-blue-600 font-semibold">Discover. Learn. Excel.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/articles" className="btn-primary text-lg px-10 py-5 group">
              Explore Articles
              <ArrowRight className="inline ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/games" className="btn-secondary text-lg px-10 py-5 group">
              <Play className="inline mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
              Play Games
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Explore Our Universe
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover science through different lenses and interactive experiences
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 200}>
                <Link to={feature.link} className="block group">
                  <div className="glass-card hover-lift h-full relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}></div>
                    
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Join thousands of students who are already exploring the wonders of science with us
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/articles" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                <BookOpen className="inline mr-3 w-5 h-5" />
                Start Reading
              </Link>
              <Link to="/request" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                Request Topic
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;