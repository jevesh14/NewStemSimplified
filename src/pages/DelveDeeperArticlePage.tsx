import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Quote, ExternalLink, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface ArticleSection {
  heading: string;
  content: string[];
  subsections?: {
    subheading: string;
    content: string[];
  }[];
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
  difficulty: string;
  tags: string[];
  sections: ArticleSection[];
  sources: ArticleSource[];
  keyTakeaways: string[];
}

const DelveDeeperArticlePage: React.FC = () => {
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

  // Articles data
  const articles: Article[] = [
    {
      id: 1,
      title: "Time Dilation - The Hidden Side of Time",
      description: "Explore the fascinating world of Einstein's relativity and discover how time itself can stretch and squeeze. From the twin paradox to GPS satellites, uncover the real-world implications of time dilation.",
      author: "By Paridhi Gautam",
      difficulty: "Intermediate",
      tags: ["relativity", "physics", "time", "Einstein", "spacetime"],
      keyTakeaways: [
        "Time is not absolute and can stretch and squeeze depending on motion and gravity",
        "The speed of light is constant, but time and space are flexible",
        "GPS satellites must account for time dilation to maintain accuracy",
        "Time travel to the future is theoretically possible through relativistic effects"
      ],
      sections: [
        {
          heading: "Introduction to Time Dilation",
          content: [
            "Imagine you and your best friend each have a stopwatch. You stay on Earth, while your friend boards a spaceship that zooms away at nearly the speed of light. A few years later, your friend returns, but while you've aged ten years, they've aged just two. This is not a sci-fi movie plot. It's real physics, and it's called time dilation.",
            "The faster something moves through space, the slower it moves through time (or at least from the point of view of someone standing still). And yes, this has been proven multiple times. But how is this possible? Isn't time universal? The truth is, time is very different from what we all think. Time is not absolute. It can stretch and squeeze depending on how fast you're moving, and Albert Einstein first predicted this phenomenon in 1905."
          ]
        },
        {
          heading: "The Views on Universal Time",
          content: [
            "For most of history, people believed that time ticked at the same rate everywhere, like a great cosmic clock. Newton's laws of universal gravitation, which formed the foundation of classical physics, depended on this idea.",
            "In the early 20th century, scientists discovered something surprising about the nature of light. According to the laws of physics at the time, if you moved toward a light source, the light should appear to move faster, and if you moved away from it, it should appear slower.",
            "Think of it as you're standing on a dark path that stretches for miles, holding a flashlight. You turn it on, and a beam of light shoots forward. Now, whether you stand still, walk, or run along the path, the light always moves away from you at the exact same speed 299,792,458 meters per second.",
            "This is completely different from what we experience in everyday life. For example, if you throw a ball while standing still and then throw it again while running, the ball moves faster the second time because your motion adds to its speed. But light doesn't work that way.",
            "No matter how fast you're moving, your speed doesn't add to or subtract from the speed of light. If light doesn't care how fast you're going, then it always travels at the same constant speed.",
            "This strange and unexpected behaviour is what led Einstein to rethink the nature of space and time itself, and ultimately create the theory of relativity. He suggested that the speed of light is a constant of nature, and to make that possible, space and time themselves must shift depending on your motion."
          ]
        },
        {
          heading: "Time Dilation Due to Motion",
          content: [
            "Einstein's Special Theory of Relativity showed that as you move faster through space, time slows down for you, at least for someone in a different time frame (when seen from someone not moving with you). This effect is tiny at everyday speeds, but once you get close to the speed of light, it becomes massive.",
            "Also, the famous twin paradox is based on this idea. It imagines two twins, one who stays on Earth while the other travels through space at nearly the speed of light. When the space-travelling twin returns, she is younger than the one who remained on Earth. This isn't science fiction; it's a real effect, where time slows down for objects moving at very high speeds.",
            "The reason it's called a paradox is that it looks like, at first, both twins should see the other as moving, so they should both think the other is aging more slowly. But the key difference is that the travelling twin experiences acceleration while leaving, turning around, and coming back, but the Earth twin stays in the same position the whole time.",
            "There is also a famous thought experiment to visualise this: imagine a spaceship travelling at 90% the speed of light. Inside, there's a clock that uses a beam of light bouncing between two mirrors to measure time. For the person inside, the light goes straight up and down, like a ping-pong ball. But to someone watching from outside, the spaceship is moving so the light appears to take a zig-zag path — a longer path."
          ]
        },
        {
          heading: "Time Dilation Due to Gravitational Force",
          content: [
            "Time slows down in stronger gravity because, as Einstein's theory of general relativity explained, gravity isn't just a force pulling objects but it's actually the bending or warping of space and time itself.",
            "Massive objects like planets and stars curve the fabric of space-time around them due to their heavy weight and large gravitational pull, and this curvature affects how time flows. The closer you are to a massive object, the more space-time bends, causing time to pass more slowly for you compared to someone farther away.",
            "Although we don't feel this in everyday life because Earth's gravity changes very little from place to place, scientists have confirmed the effect using incredibly precise atomic clocks placed at different heights. Near extremely massive objects like black holes, this time slowdown becomes huge and time can almost appear to stop."
          ],
          subsections: [
            {
              subheading: "Black Holes and Event Horizons",
              content: [
                "The event horizon is the boundary around a black hole beyond which nothing, not even light can escape. And black holes have a huge gravitation effect on the fabric of spacetime.",
                "In context with time dilation, the event horizon is a place where gravity becomes so strong that time itself appears to slow down for someone watching from a distance. For an observer far away, it looks like a clock near the event horizon is ticking slower and slower, almost stopping completely as it gets closer.",
                "However, for someone falling into the black hole, time would seem normal to them so they wouldn't notice anything unusual as they cross the event horizon. This is because they are in that current of warped space so it is the same flow of time for you."
              ]
            }
          ]
        },
        {
          heading: "GPS and Real-World Applications",
          content: [
            "Time dilation isn't just theory. This is proved as it affects real technology. GPS satellites orbit Earth at high speeds. Their clocks tick a tiny bit slower than clocks on Earth. If engineers didn't account for this, your Google Maps would be off by several kilometers.",
            "Muon particles, created when cosmic rays hit our Earth's atmosphere, decay in microseconds. They shouldn't reach Earth's surface — but they do, because they're moving so fast that their time is slowed.",
            "Also, astronauts on the International Space Station age a little less than people on Earth. It's very small, but it's measurable. In every case, high speed leads to some slow-down in time."
          ]
        },
        {
          heading: "Cosmic Time Dilation and Time Travel",
          content: [
            "Cosmic time dilation is the stretching of time across large distances in the universe, especially when observing light from distant galaxies or supernovae. Because light takes time to travel, everything we see in the cosmos is actually from the past — and the farther away an object is, the older the light we're seeing.",
            "Also, time itself is stretched due to the expansion of the universe. As space expands, it stretches the wavelength of light, which also stretches the time between each photon arriving, and this is observed as a redshift and longer event durations.",
            "For example, a supernova in a distant galaxy may appear to unfold more slowly than the same event nearby. This isn't just a perspective; it's because the fabric of spacetime itself has stretched during the light's journey, literally dilating the observed flow of time."
          ]
        },
        {
          heading: "Can We Travel to the Future Using Time Dilation?",
          content: [
            "Yes, theoretically we can! If you could get into a spaceship and travel near the speed of light, time would slow down for you compared to everyone back home. You might age just a few years while centuries pass on Earth. It's called forward time travel, and it's completely allowed by the laws of physics.",
            "In relativity, time travel to the future isn't just theoretical — it's a built-in feature of how time works at high speeds or in strong gravity. When you move close to the speed of light, or spend time near an intense gravitational field, time for you slows down relative to others.",
            "If you were to return from there, you would find yourself in the future compared to those who stayed behind. This is not a paradox or speculation; it's a real, measurable effect confirmed by experiments with fast-moving particles and precision clocks in space.",
            "But the only problem we have right now is that reaching those speeds takes unimaginable amounts of energy. Right now, it's far beyond our technology. But science does not restrict us here."
          ]
        },
        {
          heading: "What Time Dilation Teaches Us About Reality",
          content: [
            "Most people think of time as a background like a river that flows no matter what we do. Time dilation tells us that time is part of the structure of the universe — not separate from it — and our actions can manipulate time.",
            "Time and space are linked. Moving through space changes how you move through time. They're part of the same fabric, and this is what physicists call spacetime.",
            "And just like a trampoline goes down when you step on it, spacetime bends and warps due to motion and gravitational forces. That's why time isn't just ticking away and is not isolated."
          ]
        }
      ],
      sources: [
        {
          text: "Einstein, A. (1905). Zur Elektrodynamik bewegter Körper. Annalen der Physik, 17(10), 891-921."
        },
        {
          text: "Einstein, A. (1915). Die Feldgleichungen der Gravitation. Sitzungsberichte der Königlich Preußischen Akademie der Wissenschaften, 844-847."
        },
        {
          text: "Hafele, J. C., & Keating, R. E. (1972). Around-the-world atomic clocks: Predicted relativistic time gains. Science, 177(4044), 166-168."
        }
      ]
    }
  ];

  const article = articles.find(a => a.id === parseInt(id || '1'));

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Article Not Found</h1>
            <p className="text-slate-600 mb-8">The deep-dive article you're looking for doesn't exist.</p>
            <Link to="/delve-deeper" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Delve Deeper
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const estimateReadTime = (sections: ArticleSection[]): number => {
    const totalWords = sections.reduce((total, section) => {
      const sectionWords = section.content.join(' ').split(' ').length;
      const subsectionWords = section.subsections?.reduce((subTotal, subsection) => {
        return subTotal + subsection.content.join(' ').split(' ').length;
      }, 0) || 0;
      return total + sectionWords + subsectionWords;
    }, 0);
    return Math.ceil(totalWords / 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50 origin-left transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <div className="pt-24 pb-12 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <AnimatedSection>
            <Link 
              to="/delve-deeper"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-8 group hover-glow"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Delve Deeper
            </Link>
          </AnimatedSection>

          {/* Article Header */}
          <AnimatedSection>
            <div className="glass-card mb-12">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center mb-8 overflow-hidden">
                <div className="text-white text-8xl opacity-50">⏰</div>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  article.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                  article.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {article.difficulty}
                </span>
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight gradient-text">
                {article.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {article.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
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
              
              <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-24"></div>
            </div>
          </AnimatedSection>

          {/* Key Takeaways */}
          <AnimatedSection delay={200}>
            <div className="glass-card mb-12">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
                <h2 className="text-2xl font-bold text-slate-800 gradient-text">
                  Key Takeaways
                </h2>
              </div>
              <ul className="space-y-3">
                {article.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 font-bold mr-3 mt-1">•</span>
                    <span className="text-slate-700">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Article Content */}
          <article className="space-y-12">
            {article.sections.map((section, sectionIndex) => (
              <AnimatedSection key={section.heading} delay={sectionIndex * 200 + 400}>
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
                  
                  {/* Subsections */}
                  {section.subsections && (
                    <div className="mt-8 space-y-8">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="border-l-4 border-blue-300 pl-6">
                          <h3 className="text-2xl font-semibold mb-4 text-slate-800">
                            {subsection.subheading}
                          </h3>
                          <div className="space-y-4">
                            {subsection.content.map((paragraph, paragraphIndex) => (
                              <p key={paragraphIndex} className="text-lg leading-relaxed text-slate-700">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
            
            {/* Sources Section */}
            {article.sources && article.sources.length > 0 && (
              <AnimatedSection delay={(article.sections.length + 1) * 200}>
                <div className="glass-card">
                  <div className="flex items-center mb-6">
                    <Quote className="w-6 h-6 text-blue-500 mr-3" />
                    <h2 className="text-2xl font-bold text-slate-800 gradient-text">
                      References & Further Reading
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {article.sources.map((source, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                        <span className="text-blue-500 font-bold mt-1 min-w-[24px]">{index + 1}.</span>
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
          <AnimatedSection delay={(article.sections.length + 2) * 200}>
            <div className="mt-16 pt-8">
              <div className="glass-card text-center">
                <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Continue Your Deep Dive</h3>
                <p className="text-slate-600 mb-6">Explore more comprehensive scientific explorations</p>
                <Link 
                  to="/delve-deeper"
                  className="btn-primary inline-flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  More Deep-Dive Articles
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default DelveDeeperArticlePage;