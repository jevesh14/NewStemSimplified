import React from 'react';
import { Lightbulb, Heart, Zap, Globe, Microscope, Atom } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';


// Import team member photos
import LavanyaPhoto from '../../CoreTeam/Lavanya.jpeg';
import ParidhiPhoto from '../../CoreTeam/Paridhi.jpeg';
import AayanaPhoto from '../../CoreTeam/Aayana.jpeg';
import SripriyaPhoto from '../../CoreTeam/Sripriya.jpeg';
import JeveshPhoto from '../../CoreTeam/Jevesh.jpeg';
import TakshPhoto from '../../CoreTeam/Taksh.jpeg';
import AishnaPhoto from '../../CoreTeam/Aishna.jpeg';
import DishaPhoto from '../../CoreTeam/Disha.jpeg';


const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Simplicity',
      description: 'We break down complex scientific concepts into digestible, easy-to-understand content.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Accessibility',
      description: 'Science education should be available to everyone, regardless of background or experience.',
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Engagement',
      description: 'Learning should be fun and interactive, sparking curiosity and wonder about the world.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Impact',
      description: 'We aim to create scientifically literate citizens who can make informed decisions.',
      color: 'from-green-400 to-teal-500'
    }
  ];

  const team = [
    {
      name: 'Lavanya Sharma',
      role: 'Co-Founder',
      specialty: 'Biology and Chemistry Simplifier',
      image: LavanyaPhoto,
      description: 'Co-founder passionate about making biology and chemistry concepts accessible and engaging for all learners.'
    },
    {
      name: 'Paridhi Gautam',
      role: 'Co-Founder',
      specialty: 'Physics Simplifier',
      image: ParidhiPhoto,
      description: 'Co-founder dedicated to breaking down complex physics concepts into understandable and exciting content.'
    },
    {
      name: 'Ayanna Bhansali',
      role: 'Editorial Head',
      specialty: 'Content Strategy & Quality',
      image: AayanaPhoto,
      description: 'Editorial head ensuring all content meets the highest standards of clarity, accuracy, and engagement.'
    },
    {
      name: 'Sripriya Dhoot',
      role: 'Social Media Manager',
      specialty: 'Community Engagement',
      image: SripriyaPhoto,
      description: 'Social media manager building and nurturing our community of science enthusiasts across platforms.'
    },
    {
      name: 'Jevesh Jain',
      role: 'Tech Head',
      specialty: 'Technology & Development',
      image: JeveshPhoto,
      description: 'Tech head developing innovative solutions to make science education more interactive and accessible.'
    },
    {
      name: 'Taksh Jain',
      role: 'Chemistry and Biology Simplifier',
      specialty: 'Life Sciences',
      image: TakshPhoto,
      description: 'Specialist in making chemistry and biology concepts clear and relatable for students of all levels.'
    },
    {
      name: 'Aishna Goyal',
      role: 'Environmental Simplifier',
      specialty: 'Environmental Science',
      image: AishnaPhoto,
      description: 'Environmental science expert passionate about educating others on sustainability and ecological concepts.'
    },
    {
      name: 'Disha',
      role: 'Maths and Technology Simplifier',
      specialty: 'Mathematics & Technology',
      image: DishaPhoto,
      description: 'Mathematics and technology specialist making complex mathematical concepts and tech innovations accessible.'
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-12">
      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-8">
              <Atom className="w-5 h-5 text-blue-500 mr-2 animate-spin" />
              <span className="text-blue-700 font-semibold">About Our Mission</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
              STEM Simplified
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to make science education accessible, engaging, and fun for everyone. 
              Through bite-sized articles, interactive games, and clear explanations, we're breaking down 
              the barriers that make science seem intimidating.
            </p>
          </div>
        </AnimatedSection>

        {/* Mission Statement */}
        <AnimatedSection delay={200}>
          <div className="glass-card max-w-4xl mx-auto mb-20 text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold gradient-text mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To democratize science education by creating high-quality, accessible content that sparks 
              curiosity and builds scientific literacy. We believe that everyone deserves to understand 
              the incredible world of science, regardless of their background or previous experience.
            </p>
          </div>
        </AnimatedSection>


        {/* Our Values */}
        <AnimatedSection delay={400}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do, from content creation to community building
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 150}>
                <div className="glass-card text-center hover-lift h-full">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white mb-6 hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Our Story */}
        <AnimatedSection delay={500}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-6">Our Story</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  STEM Simplified was born from a simple observation: science education was often 
                  too complex, too intimidating, and too disconnected from everyday life. Our founder, 
                  a passionate educator and researcher, noticed that students were losing interest in 
                  science not because it wasn't fascinating, but because it wasn't being presented 
                  in an accessible way.
                </p>
                <p>
                  What started as a small blog with a handful of articles has grown into a comprehensive 
                  platform serving thousands of students, educators, and curious minds worldwide. We've 
                  maintained our core mission while expanding our reach and impact.
                </p>
                <p>
                  Today, we're proud to be a trusted resource for anyone looking to understand the 
                  wonders of science, from middle school students to lifelong learners exploring 
                  new frontiers of knowledge.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full flex items-center justify-center">
                      <Microscope className="w-24 h-24 text-white animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                  <Atom className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Meet Our Team */}
        <AnimatedSection delay={600}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-6">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our diverse team of scientists, educators, and creators work together to bring you 
              the best science content possible
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 150}>
                <div className="glass-card text-center hover-lift">
                  <div className="mb-4 hover:scale-110 transition-transform duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                  <div className="text-blue-600 font-semibold mb-2">{member.role}</div>
                  <div className="text-sm text-slate-500 mb-4">{member.specialty}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;