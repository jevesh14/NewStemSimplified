import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Quote, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface ArticleSection {
  heading: string;
  content: string[];
}

interface ArticleSource {
  text: string;
  url?: string;
}

interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  sections: ArticleSection[];
  sources: ArticleSource[];
}

const ArticlePage: React.FC = () => {
  const { id } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔧 TODO: Replace with real article data fetching based on ID
  const article: Article = {
    id: 1,
    title: "AI: 1, Antibiotic Resistance: 0",
    description: "An AI from Tulane University can now instantly detect antibiotic resistance in bacteria through spotting mutation patterns. This breakthrough could revolutionize how we treat infections! check out more.",
    author: "By Lavanya Sharma",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Major news from Tulane University: Researchers have developed an AI that instantly detects antibiotic resistance in bacteria.",
          "Here's the kicker? This AI doesn't just speed things up—it could completely change the game when it comes to how we fight infections.",
          "Because antibiotic resistance isn't some \"Future science problem.\"  It's a problem now. A problem why diseases like tuberculosis and staph infections are getting harder (and scarier) to treat",
          "And this tech?  It's like handing doctors a cheat code—an upgrade in how we understand and treat disease."
        ]
      },
      {
        heading: "What Happened?",
        content: [
          "Tulane University Scientists have made a new Group Association Model (GAM)- Basically, a super smart AI that can find patterns across a large set of data- that can find resistance to antibiotics in bacteria.",
          "Think of GAM like that one friend who can spot drama from a mile away — it sees tiny clues in the DNA (mutations) and figures out if bacteria are about to cause trouble (resist drugs- which you should always do!)",
          "Wait, wait, but what even is antibiotic resistance?",
          "Well, here's a quick crash course:",
          "In the past, people could take antibiotics to treat diseases like tuberculosis (TB) and staph.",
          "Now they can't. Why?",
          "Over time, these bacteria have developed resistance to the drugs. How?",
          "Antibiotics kill most bacteria, but some survive due to mutations in their DNA (now this is the problem). These resistant bacteria then reproduce, creating more bacteria that the antibiotic can't kill. (Big Yikes!)",
          "This means the antibiotics that used to work no longer do, making it much harder to treat these diseases."
        ]
      },
      {
        heading: "How Does It Work?",
        content: [
          "Okay, imagine training a dog to do tricks",
          "The New Group Association Model (GAM) uses machine learning-  a branch of AI where a model is trained on a large set of data to perform a task without being programmed step by step. Think of it as the training part of training the dog.",
          "GAM uses machine learning to find genetic mutations linked to drug resistance (you know, the same kind of mutations I mentioned earlier, the ones that let some bacteria survive antibiotics.)",
          "Current tools are basic, they at known mutations and try to find the same mutation in the bacteria. This leads to errors, because they freak over harmless mutations believing they're the reason for antibiotics' resistance, just because they look similar to known ones",
          "GAM is way smarter.",
          "It looks through a large set of data (DNA) from different bacterias, and wether they are resistant to the antibiotic or not. It finds the pattern in which the mutations occur. GAM then compares bacteria with different resistance patterns to find genetic changes that show resistance to specific drugs."
        ]
      },
      {
        heading: "Why does it matter?",
        content: [
          "Well, because people die due to this, and the numbers are just UGLY.",
          "In 2021, 450,000 people developed multidrug-resistant tuberculosis, and treatment success rates dropped to JUST 57%.",
          "Right now, other methods are slow, inaccurate, and miss rare mutations. While this treatment is proven to outperform WHO's current resistance detection.",
          "And this tech?",
          "It helps doctors find the correct treatment before it too late, it helps doctors save lives",
          "If you want to read more, check out Researchers use AI to improve diagnosis of drug-resistant infections | ScienceDaily"
        ]
      }
    ],
    sources: [
      {
        text: "Tulane University. \"Researchers Use AI to Improve Diagnosis of Drug-Resistant Infections.\" Science Daily, Apr. 2025.",
        url: "https://www.sciencedaily.com/releases/2025/04/250407173027.htm"
      },
      {
        text: "Saliba, Julian G., et al. \"Enhanced Diagnosis of Multi-Drug-Resistant Microbes Using Group Association Modeling and Machine Learning.\" Nature Communications, vol. 16, no. 1, 2025, p. 2933, doi:10.1038/s41467-025-58214-6."
      }
    ]
  };

  const estimateReadTime = (sections: ArticleSection[]): number => {
    const totalWords = sections.reduce((total, section) => {
      const sectionWords = section.content.join(' ').split(' ').length;
      return total + sectionWords;
    }, 0);
    return Math.ceil(totalWords / 200); // Average reading speed: 200 words per minute
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <AnimatedSection>
            <Link 
              to="/articles"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Breakthrough Briefs
            </Link>
          </AnimatedSection>

          {/* Article Header */}
          <AnimatedSection>
            <div className="glass-card mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight gradient-text">
                {article.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {article.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-8">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{estimateReadTime(article.sections)} min read</span>
                </div>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-24"></div>
            </div>
          </AnimatedSection>

          {/* Article Content */}
          <article className="space-y-12">
            {article.sections.map((section, sectionIndex) => (
              <AnimatedSection key={section.heading} delay={sectionIndex * 200}>
                <div className="glass-card">
                  <h2 className="text-3xl font-bold mb-8 text-slate-800 gradient-text">
                    {section.heading}
                  </h2>
                  <div className="space-y-6">
                    {section.content.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex} className="text-lg leading-relaxed text-slate-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
            
            {/* Sources Section */}
            {article.sources && article.sources.length > 0 && (
              <AnimatedSection delay={article.sections.length * 200}>
                <div className="glass-card">
                  <h2 className="text-2xl font-bold mb-6 text-slate-800 gradient-text">
                    Sources
                  </h2>
                  <div className="space-y-4">
                    {article.sources.map((source, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-blue-500 font-bold mt-1">{index + 1}.</span>
                        <div className="flex-1">
                          {source.url ? (
                            <a 
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-600 hover:text-blue-600 transition-colors group"
                            >
                              {source.text}
                              <ExternalLink className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                          ) : (
                            <span className="text-slate-600">{source.text}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </article>

          {/* Article Navigation */}
          <AnimatedSection delay={(article.sections.length + 1) * 200}>
            <div className="mt-16 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link 
                  to="/articles"
                  className="btn-primary text-center w-full sm:w-auto"
                >
                  Read More Breakthrough Briefs
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;