// Utility functions for the AI ChatBot

/**
 * Format timestamp for display
 */
export const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

/**
 * Format message text with basic markdown support
 */
export const formatMessage = (text) => {
  // Convert basic markdown to HTML
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
    .replace(/`(.*?)`/g, '<code>$1</code>') // Inline code
    .replace(/\n/g, '<br>'); // Line breaks

  return formatted;
};

/**
 * Debounce function to prevent spam
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Extract keywords from user message for better responses
 */
export const extractKeywords = (message) => {
  const keywords = {
    projects: ['project', 'projects', 'work', 'portfolio', 'built', 'created', 'developed'],
    skills: ['skill', 'skills', 'technology', 'technologies', 'tech', 'programming', 'language'],
    github: ['github', 'repository', 'repo', 'repos', 'code', 'source'],
    contact: ['contact', 'email', 'reach', 'connect', 'linkedin', 'social'],
    ai: ['ai', 'machine learning', 'ml', 'artificial intelligence', 'deep learning', 'neural'],
    experience: ['experience', 'background', 'career', 'work', 'job', 'employment']
  };

  const foundKeywords = [];
  const lowerMessage = message.toLowerCase();

  Object.keys(keywords).forEach(category => {
    keywords[category].forEach(keyword => {
      if (lowerMessage.includes(keyword)) {
        foundKeywords.push(category);
      }
    });
  });

  return [...new Set(foundKeywords)]; // Remove duplicates
};

/**
 * Generate contextual prompts for the AI based on user intent
 */
export const generateContextualPrompt = (userMessage, keywords) => {
  const baseContext = `
    You are Suraj Patel's AI assistant. Answer questions about his portfolio, projects, and professional background.
    
    Suraj's Profile:
    - AI/ML & Full-Stack Developer
    - Expertise in Python, JavaScript, React, machine learning
    - Projects include House Price Predictor, Heart Disease Predictor, Fake News Detector
    - GitHub: github.com/Surajpatel28
    - Email: surajpatel1729@gmail.com
    - Location: India
    
    User asked: "${userMessage}"
  `;

  if (keywords.includes('projects')) {
    return baseContext + `
      Focus on Suraj's projects: House Price Predictor (ML), Heart Disease Predictor (Healthcare AI), 
      Fake News Detector (NLP). Mention technologies used and GitHub links.
    `;
  }

  if (keywords.includes('skills')) {
    return baseContext + `
      Focus on Suraj's technical skills: Python, JavaScript, React.js, Node.js, machine learning 
      (TensorFlow, scikit-learn), web development, databases (MongoDB), and AI/ML expertise.
    `;
  }

  if (keywords.includes('ai')) {
    return baseContext + `
      Focus on Suraj's AI and machine learning work: predictive models, healthcare AI, 
      NLP applications, computer vision, and deep learning projects.
    `;
  }

  return baseContext;
};

/**
 * Cache management for chat history
 */
export const ChatCache = {
  save: (messages) => {
    try {
      const messagesToSave = messages.slice(-10); // Keep last 10 messages
      localStorage.setItem('portfolio-chat-history', JSON.stringify(messagesToSave));
    } catch (error) {
      console.warn('Failed to save chat history:', error);
    }
  },

  load: () => {
    try {
      const cached = localStorage.getItem('portfolio-chat-history');
      return cached ? JSON.parse(cached) : null;
    } catch (error) {
      console.warn('Failed to load chat history:', error);
      return null;
    }
  },

  clear: () => {
    try {
      localStorage.removeItem('portfolio-chat-history');
    } catch (error) {
      console.warn('Failed to clear chat history:', error);
    }
  }
};

/**
 * Rate limiting for API calls
 */
export class RateLimiter {
  constructor(maxRequests = 10, timeWindow = 60000) { // 10 requests per minute
    this.requests = [];
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindow;
  }

  canMakeRequest() {
    const now = Date.now();
    // Remove old requests outside the time window
    this.requests = this.requests.filter(time => now - time < this.timeWindow);
    
    if (this.requests.length < this.maxRequests) {
      this.requests.push(now);
      return true;
    }
    
    return false;
  }

  getTimeUntilNextRequest() {
    if (this.requests.length === 0) return 0;
    
    const oldestRequest = Math.min(...this.requests);
    const timeUntilReset = this.timeWindow - (Date.now() - oldestRequest);
    
    return Math.max(0, timeUntilReset);
  }
}

/**
 * Enhanced webhook handler with retry logic
 */
export const sendToWebhook = async (webhookUrl, message, retries = 3) => {
  const payload = {
    question: message,
    context: {
      github_username: process.env.REACT_APP_GITHUB_USERNAME || 'Surajpatel28',
      portfolio_url: window.location.origin,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      keywords: extractKeywords(message)
    }
  };

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        timeout: 10000 // 10 second timeout
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response || data.answer || data.message || data.text;
    } catch (error) {
      console.warn(`Webhook attempt ${attempt + 1} failed:`, error);
      
      if (attempt === retries - 1) {
        throw error; // Re-throw on final attempt
      }
      
      // Wait before retry (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }
};

/**
 * Enhanced fallback responses based on keywords
 */
export const getEnhancedFallbackResponse = (message) => {
  const keywords = extractKeywords(message);
  const lowerMessage = message.toLowerCase();

  // Greeting responses
  if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
    return "Hello! I'm Suraj's AI assistant. I can tell you about his projects, skills, experience, and how to get in touch with him. What would you like to know?";
  }

  // Project-focused responses
  if (keywords.includes('projects')) {
    if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning')) {
      return "Suraj has impressive AI/ML projects! His **House Price Predictor** uses linear regression for real estate predictions, the **Heart Disease Predictor** applies classification algorithms for medical diagnosis, and the **Fake News Detector** uses NLP for text analysis. All projects showcase different aspects of machine learning and are available on his GitHub.";
    }
    
    if (lowerMessage.includes('best') || lowerMessage.includes('favorite')) {
      return "Suraj's standout project is probably his **Heart Disease Predictor** - it combines healthcare AI with practical impact. The system uses classification algorithms to predict heart disease risk and includes comprehensive data analysis. It demonstrates his ability to apply machine learning to real-world health challenges.";
    }
    
    return "Suraj has built several impressive projects including:\n\n🏠 **House Price Predictor** - ML model for real estate pricing\n❤️ **Heart Disease Predictor** - Healthcare AI for medical diagnosis\n📰 **Fake News Detector** - NLP-powered text classification\n\nEach project showcases different aspects of his AI/ML and development skills. Check out his GitHub for complete code and documentation!";
  }

  // Skills and technology responses
  if (keywords.includes('skills')) {
    return "Suraj's technical expertise spans multiple domains:\n\n**Programming:** Python, JavaScript, Java, C/C++\n**Web Dev:** React.js, Node.js, Express.js, HTML5, CSS3\n**AI/ML:** TensorFlow, scikit-learn, OpenCV, Pandas, NumPy\n**Databases:** MongoDB\n**Tools:** Git, Flask, FastAPI, Tailwind CSS\n\nHe's particularly strong in AI/ML and full-stack development!";
  }

  // GitHub and code responses
  if (keywords.includes('github')) {
    return "You can explore all of Suraj's code and projects on his GitHub profile: **github.com/Surajpatel28**. His repositories showcase machine learning projects, web applications, and AI solutions. Each project includes detailed documentation, setup instructions, and technical explanations.";
  }

  // Contact information
  if (keywords.includes('contact')) {
    return "You can reach Suraj through several channels:\n\n📧 **Email:** surajpatel1729@gmail.com\n💼 **LinkedIn:** linkedin.com/in/suraj-patel-353a6a255\n🐙 **GitHub:** github.com/Surajpatel28\n\nHe's always open to discussing new opportunities, collaborations, and interesting projects!";
  }

  // AI and ML specific questions
  if (keywords.includes('ai')) {
    return "Suraj specializes in AI and machine learning with hands-on experience in:\n\n🤖 **Machine Learning:** Predictive modeling, classification, regression\n🏥 **Healthcare AI:** Medical diagnosis systems\n📝 **NLP:** Text processing, fake news detection\n🔍 **Computer Vision:** OpenCV applications\n🧠 **Deep Learning:** TensorFlow implementations\n\nHis projects demonstrate practical AI applications across different domains!";
  }

  // Experience and background
  if (keywords.includes('experience')) {
    return "Suraj is an **AI/ML & Full-Stack Developer** based in India. His experience combines:\n\n✨ Machine learning and AI development\n🌐 Full-stack web development\n📊 Data science and analysis\n🏗️ System architecture and design\n\nHe's passionate about building intelligent systems and modern web applications, with a focus on practical AI solutions.";
  }

  // Default response
  return "Thanks for your question! While I'm having trouble connecting to my advanced AI backend right now, I can share that Suraj is a skilled AI/ML and Full-Stack Developer with expertise in Python, JavaScript, machine learning, and web development. Feel free to explore his portfolio and projects, or reach out to him directly at surajpatel1729@gmail.com for more detailed discussions!";
};
