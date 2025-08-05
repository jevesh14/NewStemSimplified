import React, { useState, useEffect } from 'react';
import { Gamepad2, Play, Trophy, Users, Clock, Star, Zap, Target, Brain, Atom, Eye, Calendar, Lightbulb, Microscope, History, HelpCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

// Game Components
const RealOrFakeGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);

  // 🔧 TODO: Add real facts and fake facts here
  const questions = [
    {
      statement: "Octopuses have three hearts and blue blood",
      isReal: true,
      explanation: "This is true! Octopuses have three hearts and their blood is blue due to copper-based hemocyanin."
    },
    {
      statement: "Bananas are naturally radioactive",
      isReal: true,
      explanation: "True! Bananas contain potassium-40, making them slightly radioactive."
    },
    {
      statement: "Sharks can live for over 400 years",
      isReal: true,
      explanation: "True! Greenland sharks can live over 400 years, making them the longest-living vertebrates."
    }
  ];

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === questions[currentQuestion].isReal) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameOver(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="glass-card max-w-md w-full text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Game Complete!</h3>
          <p className="text-xl mb-6">You scored {score} out of {questions.length}</p>
          <div className="flex gap-4 justify-center">
            <button onClick={resetGame} className="btn-primary">Play Again</button>
            <button onClick={onClose} className="btn-secondary">Close</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Real or Fake?</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-500 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Score: {score}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl leading-relaxed">{questions[currentQuestion].statement}</p>
        </div>

        {!showResult ? (
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => handleAnswer(true)}
              className="btn-primary bg-green-500 hover:bg-green-600 px-8 py-4"
            >
              Real! ✓
            </button>
            <button 
              onClick={() => handleAnswer(false)}
              className="btn-primary bg-red-500 hover:bg-red-600 px-8 py-4"
            >
              Fake! ✗
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className={`text-2xl font-bold mb-4 ${
              selectedAnswer === questions[currentQuestion].isReal ? 'text-green-600' : 'text-red-600'
            }`}>
              {selectedAnswer === questions[currentQuestion].isReal ? 'Correct!' : 'Wrong!'}
            </div>
            <p className="text-slate-600">{questions[currentQuestion].explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const MicroscopeGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);

  // 🔧 TODO: Add real microscope images and answers here
  const images = [
    {
      image: "🧂", // Placeholder - replace with actual microscope image
      options: ["Salt", "Sugar", "Sand", "Snow"],
      correct: "Salt",
      explanation: "Salt crystals have a distinctive cubic structure when viewed under a microscope."
    },
    {
      image: "🍯", // Placeholder - replace with actual microscope image
      options: ["Honey", "Hair", "Silk", "Cotton"],
      correct: "Honey",
      explanation: "Honey shows crystalline structures and bee pollen particles under magnification."
    },
    {
      image: "💎", // Placeholder - replace with actual microscope image
      options: ["Diamond", "Glass", "Ice", "Quartz"],
      correct: "Diamond",
      explanation: "Diamond has a unique crystal lattice structure visible under high magnification."
    }
  ];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === images[currentImage].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentImage < images.length - 1) {
        setCurrentImage(currentImage + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameOver(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentImage(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="glass-card max-w-md w-full text-center">
          <Microscope className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Game Complete!</h3>
          <p className="text-xl mb-6">You scored {score} out of {images.length}</p>
          <div className="flex gap-4 justify-center">
            <button onClick={resetGame} className="btn-primary">Play Again</button>
            <button onClick={onClose} className="btn-secondary">Close</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Guess the Microscope Image</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-500 mb-2">
            <span>Image {currentImage + 1} of {images.length}</span>
            <span>Score: {score}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentImage + 1) / images.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-8xl">{images[currentImage].image}</span>
          </div>
          <p className="text-lg">What is this microscope image showing?</p>
        </div>

        {!showResult ? (
          <div className="grid grid-cols-2 gap-4">
            {images[currentImage].options.map((option) => (
              <button 
                key={option}
                onClick={() => handleAnswer(option)}
                className="btn-secondary py-4 hover:scale-105 transition-transform"
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className={`text-2xl font-bold mb-4 ${
              selectedAnswer === images[currentImage].correct ? 'text-green-600' : 'text-red-600'
            }`}>
              {selectedAnswer === images[currentImage].correct ? 'Correct!' : 'Wrong!'}
            </div>
            <p className="text-slate-600">{images[currentImage].explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const YearGuessingGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [score, setScore] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // 🔧 TODO: Add real historical science events here
  const events = [
    {
      event: "First human landing on the Moon",
      year: 1969,
      range: 10, // Allow 10 years margin
      explanation: "Apollo 11 landed on the Moon on July 20, 1969, with Neil Armstrong and Buzz Aldrin."
    },
    {
      event: "Discovery of DNA structure",
      year: 1953,
      range: 5,
      explanation: "Watson and Crick published their DNA double helix model in 1953."
    },
    {
      event: "First successful heart transplant",
      year: 1967,
      range: 8,
      explanation: "Dr. Christiaan Barnard performed the first human heart transplant in 1967."
    }
  ];

  const handleSubmit = () => {
    const guess = parseInt(userGuess);
    const correct = events[currentEvent].year;
    const range = events[currentEvent].range;
    
    setShowResult(true);
    
    if (Math.abs(guess - correct) <= range) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentEvent < events.length - 1) {
        setCurrentEvent(currentEvent + 1);
        setUserGuess('');
        setShowResult(false);
      } else {
        setGameOver(true);
      }
    }, 3000);
  };

  const resetGame = () => {
    setCurrentEvent(0);
    setScore(0);
    setUserGuess('');
    setShowResult(false);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="glass-card max-w-md w-full text-center">
          <History className="w-16 h-16 text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Game Complete!</h3>
          <p className="text-xl mb-6">You scored {score} out of {events.length}</p>
          <div className="flex gap-4 justify-center">
            <button onClick={resetGame} className="btn-primary">Play Again</button>
            <button onClick={onClose} className="btn-secondary">Close</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">What Year Did This Happen?</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-500 mb-2">
            <span>Event {currentEvent + 1} of {events.length}</span>
            <span>Score: {score}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentEvent + 1) / events.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl leading-relaxed mb-6">{events[currentEvent].event}</p>
          <p className="text-slate-600 mb-4">What year did this happen?</p>
        </div>

        {!showResult ? (
          <div className="text-center">
            <input
              type="number"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              placeholder="Enter year (e.g., 1969)"
              className="form-input text-center text-xl w-48 mb-6"
              min="1800"
              max="2024"
            />
            <br />
            <button 
              onClick={handleSubmit}
              disabled={!userGuess}
              className="btn-primary px-8 py-4 disabled:opacity-50"
            >
              Submit Guess
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className={`text-2xl font-bold mb-4 ${
              Math.abs(parseInt(userGuess) - events[currentEvent].year) <= events[currentEvent].range 
                ? 'text-green-600' : 'text-red-600'
            }`}>
              {Math.abs(parseInt(userGuess) - events[currentEvent].year) <= events[currentEvent].range 
                ? 'Close enough!' : 'Not quite!'}
            </div>
            <p className="text-lg mb-2">Correct answer: {events[currentEvent].year}</p>
            <p className="text-slate-600">{events[currentEvent].explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const WhatHappensIfGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // 🔧 TODO: Add real science scenarios here
  const scenarios = [
    {
      scenario: "What happens if you put a marshmallow in a vacuum chamber?",
      options: [
        "It shrinks to half its size",
        "It expands and becomes fluffy",
        "It turns into liquid",
        "Nothing happens"
      ],
      correct: "It expands and becomes fluffy",
      explanation: "In a vacuum, the air bubbles inside the marshmallow expand because there's no external pressure to compress them."
    },
    {
      scenario: "What happens if you drop a feather and a hammer on the Moon?",
      options: [
        "The hammer falls faster",
        "The feather falls faster", 
        "They fall at the same speed",
        "They float in the air"
      ],
      correct: "They fall at the same speed",
      explanation: "Without air resistance, all objects fall at the same rate regardless of their mass, as demonstrated by Apollo 15."
    },
    {
      scenario: "What happens if you put dry ice in warm water?",
      options: [
        "It melts into liquid",
        "It creates fog and bubbles",
        "It freezes the water",
        "It explodes"
      ],
      correct: "It creates fog and bubbles",
      explanation: "Dry ice sublimates (turns directly from solid to gas) rapidly in warm water, creating dramatic fog effects."
    }
  ];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === scenarios[currentScenario].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(currentScenario + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameOver(true);
      }
    }, 3000);
  };

  const resetGame = () => {
    setCurrentScenario(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="glass-card max-w-md w-full text-center">
          <HelpCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Game Complete!</h3>
          <p className="text-xl mb-6">You scored {score} out of {scenarios.length}</p>
          <div className="flex gap-4 justify-center">
            <button onClick={resetGame} className="btn-primary">Play Again</button>
            <button onClick={onClose} className="btn-secondary">Close</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">What Happens If...?</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-500 mb-2">
            <span>Scenario {currentScenario + 1} of {scenarios.length}</span>
            <span>Score: {score}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl leading-relaxed">{scenarios[currentScenario].scenario}</p>
        </div>

        {!showResult ? (
          <div className="grid grid-cols-1 gap-3">
            {scenarios[currentScenario].options.map((option) => (
              <button 
                key={option}
                onClick={() => handleAnswer(option)}
                className="btn-secondary py-4 text-left hover:scale-105 transition-transform"
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className={`text-2xl font-bold mb-4 ${
              selectedAnswer === scenarios[currentScenario].correct ? 'text-green-600' : 'text-red-600'
            }`}>
              {selectedAnswer === scenarios[currentScenario].correct ? 'Correct!' : 'Wrong!'}
            </div>
            <p className="text-lg mb-2">Correct answer: {scenarios[currentScenario].correct}</p>
            <p className="text-slate-600">{scenarios[currentScenario].explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const GamesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const games = [
    {
      id: 1,
      title: 'Real or Fake?',
      description: 'Test your knowledge by guessing which scientific facts are real or made-up',
      icon: '🤔',
      category: 'trivia',
      component: 'real-or-fake',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Guess the Microscope Image',
      description: 'Identify mysterious specimens from zoomed-in microscope images',
      icon: '🔬',
      category: 'biology',
      component: 'microscope',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'What Year Did This Happen?',
      description: 'Test your knowledge of when famous scientific discoveries occurred',
      icon: '📅',
      category: 'history',
      component: 'year-guessing',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'What Happens If...?',
      description: 'Predict the outcomes of fun and fascinating science scenarios',
      icon: '🧪',
      category: 'physics',
      component: 'what-happens-if',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Games', icon: <Gamepad2 className="w-5 h-5" /> },
    { id: 'trivia', name: 'Trivia', icon: <Brain className="w-5 h-5" /> },
    { id: 'biology', name: 'Biology', icon: <Microscope className="w-5 h-5" /> },
    { id: 'history', name: 'History', icon: <History className="w-5 h-5" /> },
    { id: 'physics', name: 'Physics', icon: <Zap className="w-5 h-5" /> }
  ];

  const filteredGames = selectedCategory === 'all' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const playGame = (gameComponent: string) => {
    setActiveGame(gameComponent);
  };

  const closeGame = () => {
    setActiveGame(null);
  };

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
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-8">
              <Gamepad2 className="w-5 h-5 text-blue-500 mr-2 animate-pulse" />
              <span className="text-blue-700 font-semibold">Interactive Learning Games</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              STEM Games
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Learn science through play! Our interactive games make complex concepts 
              fun and engaging for students of all ages.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={300}>
          <div className="glass-card mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                      : 'bg-white/70 text-slate-600 hover:bg-white hover:text-blue-600 hover:scale-105'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredGames.map((game, index) => (
            <AnimatedSection key={game.id} delay={index * 150}>
              <div className="glass-card hover-lift group cursor-pointer h-full relative overflow-hidden">
                {/* Game Header */}
                <div className="relative mb-6">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${game.color} rounded-t-2xl`}></div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className={`text-5xl group-hover:scale-110 transition-transform duration-300`}>
                      {game.icon}
                    </div>
                  </div>
                </div>

                {/* Game Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {game.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {game.description}
                  </p>

                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      game.category === 'trivia' ? 'bg-blue-100 text-blue-700' :
                      game.category === 'biology' ? 'bg-green-100 text-green-700' :
                      game.category === 'history' ? 'bg-purple-100 text-purple-700' :
                      game.category === 'physics' ? 'bg-orange-100 text-orange-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {game.category}
                    </span>
                  </div>
                </div>

                {/* Play Button */}
                <div className="mt-6">
                  <button 
                    onClick={() => playGame(game.component)}
                    className={`w-full btn-primary group-hover:scale-105 transition-all duration-300 bg-gradient-to-r ${game.color}`}
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Play Now
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${game.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Coming Soon Section */}
        <AnimatedSection delay={600}>
          <div className="mt-20 text-center">
            <div className="glass-card max-w-2xl mx-auto">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold gradient-text mb-4">More Games Coming Soon!</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We're constantly developing new interactive games to make learning even more fun. 
                Have an idea for a game? Let us know!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Get Notified
                </button>
                <button className="btn-secondary">
                  Suggest a Game
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Game Modals */}
      {activeGame === 'real-or-fake' && <RealOrFakeGame onClose={closeGame} />}
      {activeGame === 'microscope' && <MicroscopeGame onClose={closeGame} />}
      {activeGame === 'year-guessing' && <YearGuessingGame onClose={closeGame} />}
      {activeGame === 'what-happens-if' && <WhatHappensIfGame onClose={closeGame} />}
    </div>
  );
};

export default GamesPage;