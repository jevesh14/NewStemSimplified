import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, Filter, Calendar, User, Clock, Bookmark, Share2, Eye } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const BreakthroughBriefs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    // Scroll to the top of the page when this component is rendered
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Article data
  const articles = [
    {
      id: 1,
      title: "AI: 1, Antibiotic Resistance: 0",
      description: "An AI from Tulane University can now instantly detect antibiotic resistance in bacteria through spotting mutation patterns. This breakthrough could revolutionize how we treat infections!",
      author: "By Lavanya Sharma",
      category: "biology",
      readTime: "5 min read",
      date: "2025-01-15",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      id:2,
      title: "Pocket-Sized Physics: Turning Your Phone into an Antimatter Detector",
      description: "Scientists just used a phone to track invisible particles . It’s called antimatter and this could help us understand why the universe even exists. Check it out by reading this article!!", 
      author: "By Paridhi Gautam",
      category: "physics",
      date: "2025-01-15",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "The Soil Factor: Soil Saturation Triggers Floods",
      description: "Scientists expose how wet soil can supercharge floods! Even moderate storms can cause massive damage. Discover how smarter flood prediction is now possible by reading about the ground beneath the storm!",
      author: "By Aishna Goyal",
      category: "environment",
      date: "2025-01-15",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "The Future of Healthcare Is in Your Breath — Literally",
      description: "A new device captures clues from the air around you — and it might just change how we fight disease forever. Check it out by reading this article",
      author: "By Taksh Jain",
      category: "technology",
      date: "2025-01-15",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Tiny Bugs, Infinite Potential",
      description: "Scientists have invented micro bots capable of delivering medicine directly inside the body-no surgery needed! This breakthrough is able to transform the medical industry on treatments for diseases like cancer and infections. Scroll to learn more!",
      author: "By Sandra Myat (Team Thailand)",
      category: "technology",
      date: "2025-01-15",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    }, 
    {
      id: 6,
      title: "Automated Labs: Smarter, Faster, and Self-Driven!",
      description: "This breakthrough describes a game-changing AI-powered lab that can run experiments on its own. You'll find out about how the lab works, its importance in the scientific world, and reveals how machines are doing science way better, faster and smarter!",
      author: "By Disha Maheshwari",
      category: "technology",
      date: "2025-01-15",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    }
  ];

  const categories = ['all', 'physics', 'chemistry', 'biology', 'technology', 'space', 'environment'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleShare = (articleId: number) => {
    const article = articles.find(a => a.id === articleId);
    if (article && navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.origin + `/article/${articleId}`
      }).catch((error) => {
        console.log('Error sharing:', error);
        // Fallback: copy to clipboard
        const shareText = `${article.title}\n\n${article.description}\n\nRead more: ${window.location.origin}/article/${articleId}`;
        navigator.clipboard.writeText(shareText).then(() => {
          alert('Article link copied to clipboard!');
        });
      });
    } else if (article) {
      // Fallback for browsers that don't support navigator.share
      const shareText = `${article.title}\n\n${article.description}\n\nRead more: ${window.location.origin}/article/${articleId}`;
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Article link copied to clipboard!');
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-12">
      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Breakthrough Briefs
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay updated with the latest scientific discoveries and innovations, 
              explained in simple, digestible formats
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filter Section */}
        <AnimatedSection delay={200}>
          <div className="glass-card mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search breakthrough articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-input pl-12 w-full text-blue-700 placeholder-blue-400"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-blue-500" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="form-input min-w-[150px] text-blue-700"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-4">
                <Calendar className="w-5 h-5 text-blue-500 " />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-input min-w-[150px] text-blue-700"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="trending">Trending</option>
                </select>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Articles Section */}
        {articles.length === 0 ? (
          <AnimatedSection delay={400}>
            <div className="text-center py-24">
              <div className="glass-card max-w-2xl mx-auto">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <Search className="w-16 h-16 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-blue-700 mb-4">No Articles Yet</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Our team of science writers is working hard to bring you the latest breakthroughs. 
                  Check back soon for cutting-edge discoveries and innovations!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">
                    <Bookmark className="w-5 h-5 mr-2" />
                    Get Notified
                  </button>
                  <button className="btn-secondary">
                    Request Topic
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ) : (
          <div className="space-y-8">
            {filteredArticles.map((article, index) => (
              <AnimatedSection 
                key={article.id} 
                delay={index * 150}
                direction="left"
              >
                <Link to={`/article/${article.id}`} className="block">
                  <div className="glass-card hover-lift group cursor-pointer">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Article Image Placeholder */}
                    <div className="lg:w-1/3">
                      <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                        <div className="text-white text-6xl opacity-50">🔬</div>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="lg:w-2/3 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
                            {article.title}
                          </h2>
                          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                            {article.description}
                          </p>
                        </div>
                        
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="ml-4 p-3 rounded-full hover:bg-blue-100 transition-colors duration-200 hover-glow"
                        >
                          {openAccordion === index ? (
                            <ChevronUp className="w-6 h-6 text-blue-600" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-blue-500" />
                          )}
                        </button>
                      </div>

                      {/* Article Meta */}
                      <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span>By {article.author}</span>
                        </div>

                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{article.date}</span>
                        </div>
                      </div>

                      {/* Article Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-3">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleShare(article.id);
                            }}
                            className="flex items-center px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full transition-colors"
                          >
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </button>
                        </div>
                        
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          article.category === 'physics' ? 'bg-blue-100 text-blue-700' :
                          article.category === 'chemistry' ? 'bg-green-100 text-green-700' :
                          article.category === 'biology' ? 'bg-purple-100 text-purple-700' :
                          article.category === 'technology' ? 'bg-orange-100 text-orange-700' :
                          article.category === 'space' ? 'bg-indigo-100 text-indigo-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {article.category}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* No Results Message */}
        {filteredArticles.length === 0 && articles.length > 0 && (
          <AnimatedSection>
            <div className="text-center py-16">
              <div className="glass-card max-w-lg mx-auto">
                <h2 className="text-2xl font-bold text-slate-600 mb-4">No matching articles found</h2>
                <p className="text-slate-500 mb-6">Try adjusting your search terms or filters</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setFilterCategory('all');
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default BreakthroughBriefs;