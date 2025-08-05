import React, { useState } from 'react';
import { Send, Lightbulb, BookOpen, Users, Zap, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestPage: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const createConfetti = () => {
    const colors = ['#3A75FF', '#5C9EFF', '#9FBBF9', '#B4D4FF'];
    for (let i = 0; i < 60; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + 's';
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 3000);
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 4000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t9gty7m",    
        "template_qde9lgg",     
        {
          topic: topic,
          description: description,
        },
        "dLB5rDPUqEO--3lw9"        
      )
      .then(() => {
        toast.success("Article request sent successfully!");
        setTopic("");
        setDescription("");
        setIsSubmitting(false);
        setSubmitStatus('success');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      })
      .catch((err) => {
        toast.error("There was an error. Please try again!")
        console.error(`This was the error: ${err}`)
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      });
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-12">
      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Header Section */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-8">
              <Lightbulb className="w-5 h-5 text-blue-500 mr-2 animate-pulse" />
              <span className="text-blue-700 font-semibold">Have a Topic in Mind?</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Request an Article
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Can't find what you're looking for? Tell us what scientific topic you'd like us to explore, 
              and our expert writers will create engaging content just for you!
            </p>
          </div>
        </AnimatedSection>

        {/* Request Form */}
        <AnimatedSection delay={400}>
          <div className="glass-card max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Topic */}
              <div className="form-group">
                <input
                  type="text"
                  id="topic"
                  placeholder=" "
                  required
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="form-input peer"
                />
                <label htmlFor="topic" className="form-label">
                  Topic Title *
                </label>
                <p className="text-sm text-slate-500 mt-2">
                  e.g., "Quantum Computing", "CRISPR Gene Editing", "Black Holes"
                </p>
              </div>

              {/* Description */}
              <div className="form-group">
                <textarea
                  id="description"
                  placeholder=" "
                  required
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-input peer resize-none"
                />
                <label htmlFor="description" className="form-label">
                  Detailed Description *
                </label>
                <p className="text-sm text-slate-500 mt-2">
                  Tell us more about what you'd like to learn. Include specific questions, 
                  areas of interest, or how you plan to use this information.
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary text-lg px-12 py-4 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  } ${
                    submitStatus === 'success' ? 'bg-green-500 hover:bg-green-600' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block mr-3"></div>
                      Submitting...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-3 inline" />
                      Request Submitted!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3 inline" />
                      Submit Request
                    </>
                  )}
                </button>
                
                {submitStatus === 'error' && (
                  <div className="flex items-center justify-center mt-4 text-red-600">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>Please try again</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection delay={600}>
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center gradient-text mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card hover-lift">
                <h3 className="text-xl font-bold text-slate-800 mb-3">How long does it take?</h3>
                <p className="text-slate-600">
                  Most requests are fulfilled within 3-7 days. Complex topics may take up to 2 weeks 
                  to ensure we provide the highest quality content.
                </p>
              </div>
              
              <div className="glass-card hover-lift">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Is this service free?</h3>
                <p className="text-slate-600">
                  Yes! Our article request service is completely free. We're passionate about 
                  making science education accessible to everyone.
                </p>
              </div>
              
              <div className="glass-card hover-lift">
                <h3 className="text-xl font-bold text-slate-800 mb-3">What topics do you cover?</h3>
                <p className="text-slate-600">
                  We cover all STEM fields including physics, chemistry, biology, mathematics, 
                  technology, and emerging scientific research.
                </p>
              </div>
              
              <div className="glass-card hover-lift">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Can I request updates?</h3>
                <p className="text-slate-600">
                  Absolutely! If you'd like updates on existing articles or want to suggest 
                  improvements, just let us know in your request.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default RequestPage;