import React from 'react';
import { Github, Twitter, Instagram, Sparkles, Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter', color: 'hover:bg-blue-500' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@stemsimplified.com', label: 'Email', color: 'hover:bg-green-500' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
    { name: 'Games', href: '/games' },
    { name: 'Request Topic', href: '/request' },
    { name: 'About Us', href: '/about' }
  ];

  const categories = [
    { name: 'Physics', href: '/articles?category=physics' },
    { name: 'Chemistry', href: '/articles?category=chemistry' },
    { name: 'Biology', href: '/articles?category=biology' },
    { name: 'Technology', href: '/articles?category=technology' },
    { name: 'Space', href: '/articles?category=space' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                STEM Simplified
              </h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Making science accessible and fun for everyone through engaging content, 
              interactive games, and clear explanations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-blue-200">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span>hello@stemsimplified.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>Global • Remote First</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span>Available 24/7 Online</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href} 
                    className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-3 bg-white/10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm">
              © {currentYear} STEM Simplified. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-blue-200">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            
            <div className="flex items-center text-blue-200 group cursor-pointer">
              <span className="text-sm mr-2">Made with</span>
              <Heart className="w-4 h-4 text-red-400 group-hover:scale-125 transition-transform duration-300 animate-pulse" />
              <span className="text-sm ml-2">by Jevesh Jain</span>
              <Sparkles className="w-4 h-4 ml-2 text-yellow-400 group-hover:animate-spin transition-all duration-300" />
              <span className="ml-1">👑</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;