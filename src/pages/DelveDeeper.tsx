import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, User, Clock, Bookmark, Share2, BookOpen, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const DelveDeeper: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Real Delve Deeper articles data
  const articles = [
    {
      id: 1,
      title: "Time Dilation - The Hidden Side of Time",
      description: "Explore the fascinating world of Einstein's relativity and discover how time itself can stretch and squeeze. From the twin paradox to GPS satellites, uncover the real-world implications of time dilation.",
      author: "By Paridhi Gautam",
      category: "physics",
      readTime: "18 min read",
      date: "2025-01-20",
      difficulty: "Intermediate",
      tags: ["relativity", "physics", "time", "Einstein", "spacetime"]
    }
  ];

  const categories = ['all', 'physics', 'chemistry', 'biology', 'technology', 'space', 'environment', 'medicine'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleShare = (articleId: number) => {
    const article = articles.find(a => a.id === articleId);
    if (article && navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.origin + `/delve-deeper/${articleId}`
      }).catch((error) => {
        console.log('Error sharing:', error);
        const shareText = `${article.title}\n\n${article.description}\n\nRead more: ${window.location.origin}/delve-deeper/${articleId}`;
        navigator.clipboard.writeText(shareText).then(() => {
          alert('Article link copied to clipboard!');
        });
      });
    } else if (article) {
      const shareText = `${article.title}\n\n${article.description}\n\nRead more: ${window.location.origin}/delve-deeper/${articleId}`;
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
              Delve Deeper
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive explorations of complex scientific concepts. 
              Deep-dive articles for curious minds seeking detailed understanding.
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
                  placeholder="Search deep-dive articles..."
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
                <Calendar className="w-5 h-5 text-blue-500" />
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
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-blue-700 mb-4">No Deep-Dive Articles Yet</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Our research team is preparing comprehensive deep-dive articles. 
                  Check back soon for detailed scientific explorations!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">
                    <Bookmark className="w-5 h-5 mr-2" />
                    Get Notified
                  </button>
                  <button className="btn-secondary">
                    Suggest Topic
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
                <div className="glass-card hover-lift group cursor-pointer transition-all duration-300">
                  <Link to={`/delve-deeper/${article.id}`} className="block">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Article Image Placeholder */}
                      <div className="lg:w-1/3">
                        <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center overflow-hidden">
                          <div className="text-white text-6xl opacity-50">🧬</div>
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="lg:w-2/3 flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                article.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                                article.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {article.difficulty}
                              </span>
                              <TrendingUp className="w-4 h-4 text-blue-500" />
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                              {article.title}
                            </h2>
                            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                              {article.description}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {article.tags.map((tag, tagIndex) => (
                                <span 
                                  key={tagIndex}
                                  className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Article Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{article.readTime}</span>
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
                              className="flex items-center px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full transition-colors duration-200"
                            >
                              <Share2 className="w-4 h-4 mr-2" />
                              Share
                            </button>
                            <button className="flex items-center px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full transition-colors duration-200">
                              <Bookmark className="w-4 h-4 mr-2" />
                              Save
                            </button>
                          </div>
                          
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            article.category === 'physics' ? 'bg-blue-100 text-blue-700' :
                            article.category === 'chemistry' ? 'bg-green-100 text-green-700' :
                            article.category === 'biology' ? 'bg-purple-100 text-purple-700' :
                            article.category === 'technology' ? 'bg-orange-100 text-orange-700' :
                            article.category === 'space' ? 'bg-indigo-100 text-indigo-700' :
                            article.category === 'environment' ? 'bg-emerald-100 text-emerald-700' :
                            article.category === 'medicine' ? 'bg-pink-100 text-pink-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {article.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
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

export default DelveDeeper;