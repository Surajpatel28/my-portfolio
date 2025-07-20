import React, { useState, useRef, useEffect, useCallback, useMemo, memo } from 'react';
import { FiMessageCircle, FiSend, FiX, FiUser, FiCpu, FiLoader } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { getEnhancedFallbackResponse } from '../utils/chatUtils';

// Check for scheduler.yield() support for advanced task management
const supportsSchedulerYield = typeof window !== 'undefined' && 
  window.scheduler && typeof window.scheduler.yield === 'function';

// Advanced task yielding function
const yieldToMain = () => {
  if (supportsSchedulerYield) {
    return window.scheduler.yield();
  }
  // Fallback: yield control using MessageChannel for better performance than setTimeout
  return new Promise(resolve => {
    const channel = new MessageChannel();
    channel.port2.onmessage = () => resolve();
    channel.port1.postMessage(null);
  });
};

// Advanced scroll optimization with requestAnimationFrame
const useOptimizedScroll = (messagesEndRef, messages) => {
  const rafRef = useRef();
  
  const scrollToBottom = useCallback(() => {
    // Cancel any pending scroll
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      if (messagesEndRef.current) {
        // Use scrollIntoView with instant behavior for better performance
        messagesEndRef.current.scrollIntoView({ 
          behavior: 'auto', 
          block: 'end',
          inline: 'nearest'
        });
      }
    });
  }, [messagesEndRef]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return scrollToBottom;
};

// Custom memo comparison for Message component with deep props checking
const messagePropsAreEqual = (prevProps, nextProps) => {
  return prevProps.message.id === nextProps.message.id && 
         prevProps.message.text === nextProps.message.text &&
         prevProps.message.sender === nextProps.message.sender &&
         prevProps.darkMode === nextProps.darkMode;
};

// Highly optimized Message Component with mobile-first design
const Message = memo(({ message, darkMode }) => {
  // Memoize mobile-optimized className calculations
  const containerClassName = useMemo(() => 
    `flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2 sm:mb-3`,
    [message.sender]
  );

  const flexClassName = useMemo(() => 
    `flex items-start space-x-1 sm:space-x-2 max-w-[85%] sm:max-w-[80%] ${
      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
    }`,
    [message.sender]
  );

  const avatarClassName = useMemo(() => 
    `w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
      message.sender === 'user'
        ? darkMode ? 'bg-blue-600' : 'bg-blue-500'
        : 'bg-gradient-to-r from-purple-500 to-pink-500'
    }`,
    [message.sender, darkMode]
  );

  const bubbleClassName = useMemo(() => 
    `rounded-2xl px-3 py-2 sm:px-4 sm:py-2 break-words text-sm sm:text-sm leading-relaxed ${
      message.sender === 'user'
        ? darkMode
          ? 'bg-blue-600 text-white'
          : 'bg-blue-500 text-white'
        : darkMode
          ? 'bg-gray-800 border border-gray-700 text-gray-200'
          : 'bg-gray-100 text-gray-900'
    }`,
    [message.sender, darkMode]
  );

  return (
    <div className={containerClassName}>
      <div className={flexClassName}>
        {/* Avatar - smaller on mobile */}
        <div className={avatarClassName}>
          {message.sender === 'user' ? (
            <FiUser className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          ) : (
            <FiCpu className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          )}
        </div>

        {/* Message Bubble - responsive text */}
        <div className={bubbleClassName}>
          <p className="whitespace-pre-wrap">
            {message.text}
          </p>
        </div>
      </div>
    </div>
  );
}, messagePropsAreEqual);

Message.displayName = 'Message';

// Mobile-optimized QuickSuggestions component with touch targets
const QuickSuggestions = memo(({ suggestions, darkMode, onSuggestionClick }) => {
  // Touch-optimized button styling with minimum 44px height for accessibility
  const buttonClassName = useMemo(() => 
    `min-h-[44px] text-xs sm:text-sm px-3 py-2 rounded-full transition-all duration-200 
     touch-manipulation active:scale-95 font-medium ${
      darkMode
        ? 'bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white'
        : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
    }`,
    [darkMode]
  );

  const headerClassName = useMemo(() => 
    `text-xs sm:text-sm text-center font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`,
    [darkMode]
  );

  return (
    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
      <p className={headerClassName}>
        Try asking:
      </p>
      {/* Mobile: Grid layout for better touch targets, Desktop: Flex wrap */}
      <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className={buttonClassName}
            aria-label={`Quick suggestion: ${suggestion}`}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}, (prevProps, nextProps) => 
  prevProps.darkMode === nextProps.darkMode && 
  prevProps.suggestions === nextProps.suggestions
);

QuickSuggestions.displayName = 'QuickSuggestions';

const ChatBot = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Suraj's AI assistant. Ask me about his projects, skills, or GitHub profile! 🚀",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastMessageId, setLastMessageId] = useState(1);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const lastRequestTime = useRef(0);

  // Webhook URL
  const WEBHOOK_URL = "https://portfolio-backend-3fsy.onrender.com/webhook-test/portfolio-chat"

  // Use optimized scroll hook
  const scrollToBottom = useOptimizedScroll(messagesEndRef, messages);

  // Optimized scroll effect with task yielding
  useEffect(() => {
    const performScroll = async () => {
      // Yield to main thread before scrolling for smoother performance
      await yieldToMain();
      scrollToBottom();
    };
    
    if (messages.length > 0) {
      performScroll();
    }
  }, [messages.length, scrollToBottom]);

  // Load cached messages only once
  useEffect(() => {
    // Clear any existing chat history on component mount (fresh start)
    try {
      localStorage.removeItem('portfolio-chat-history');
    } catch (error) {
      console.warn('Failed to clear chat history:', error);
    }
  }, []);

  // Optimized message saving (disabled for fresh start on refresh)
  useEffect(() => {
    // Comment out message saving to localStorage for fresh start behavior
    // if (messages.length > 1) {
    //   const timeoutId = setTimeout(() => {
    //     try {
    //       const messagesToSave = messages.slice(-8); // Keep only last 8 messages
    //       localStorage.setItem('portfolio-chat-history', JSON.stringify(messagesToSave));
    //     } catch (error) {
    //       console.warn('Failed to save chat history:', error);
    //     }
    //   }, 500);
    //   return () => clearTimeout(timeoutId);
    // }
  }, [messages]);

  // Focus input when chat opens - immediate
  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Use requestAnimationFrame for smoother focus
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isOpen]);

  // Optimized bot response with task yielding
  const addBotMessage = useCallback(async (text) => {
    // Yield to main thread before heavy state update
    await yieldToMain();
    
    const newMessage = {
      id: lastMessageId + 1,
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setLastMessageId(prev => prev + 1);
  }, [lastMessageId]);

  // Enhanced webhook call with advanced error handling and task yielding
  const sendToWebhook = useCallback(async (message) => {
    // Check if fallback mode is enabled
    if (process.env.REACT_APP_USE_FALLBACK_ONLY === 'true') {
      console.log('🔄 Using fallback mode, skipping n8n webhook');
      await yieldToMain(); // Simulate network delay
      return getEnhancedFallbackResponse(message);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    try {
      // Yield before making network request
      await yieldToMain();
      
      // Debug logging
      console.log('🚀 Sending request to n8n:', WEBHOOK_URL);
      console.log('📝 Request payload:', {
        question: message,
        context: {
          github_username: 'Surajpatel28',
          portfolio_url: window.location.origin,
          timestamp: new Date().toISOString()
        }
      });
      
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          question: message,
          context: {
            github_username: 'Surajpatel28',
            portfolio_url: window.location.origin,
            timestamp: new Date().toISOString()
          }
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      
      console.log('📡 Response status:', response.status);
      console.log('📡 Response headers:', response.headers);

      if (!response.ok) {
        console.error('❌ HTTP Error:', response.status, response.statusText);
        // Try to get error details from response body
        let errorDetails = 'No error details available';
        try {
          const errorText = await response.text();
          errorDetails = errorText;
          console.error('📄 Error response body:', errorText);
        } catch (parseError) {
          console.error('Could not parse error response:', parseError);
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorDetails}`);
      }
      
      const data = await response.json();
      console.log('✅ Response data:', data);
      
      return data.response || data.answer || data.message || 'Sorry, I received an empty response.';
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('🔥 Webhook error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      console.log('🔄 Falling back to local responses...');
      return getEnhancedFallbackResponse(message);
    }
  }, [WEBHOOK_URL]);

  // Highly optimized message handler with task yielding and batch updates
  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() || isLoading) return;

    // Simple rate limiting
    const now = Date.now();
    if (now - lastRequestTime.current < 2000) {
      return; // Prevent spam (2 seconds between messages)
    }
    lastRequestTime.current = now;

    const userMessage = {
      id: lastMessageId + 1,
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    // Batch state updates for better performance
    const inputValueToSend = inputValue.trim();
    
    // Add user message immediately and clear input in one batch
    setMessages(prev => [...prev, userMessage]);
    setLastMessageId(prev => prev + 1);
    setInputValue('');
    setIsLoading(true);

    try {
      // Yield before processing to keep UI responsive
      await yieldToMain();
      
      const botResponse = await sendToWebhook(inputValueToSend);
      await addBotMessage(botResponse);
    } catch (error) {
      const fallbackResponse = getEnhancedFallbackResponse(inputValueToSend);
      await addBotMessage(fallbackResponse);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading, lastMessageId, sendToWebhook, addBotMessage]);

  // Handle key press with useCallback
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  // Memoized quick suggestions
  const quickSuggestions = useMemo(() => [
    "What projects has Suraj built?",
    "What are his top technologies?",
    "Tell me about his AI projects",
    "How can I contact him?"
  ], []);

  const handleSuggestionClick = useCallback(async (suggestion) => {
    // Directly send the suggestion without state update delay
    if (isLoading) return;
    
    const now = Date.now();
    if (now - lastRequestTime.current < 2000) return;
    lastRequestTime.current = now;

    const userMessage = {
      id: lastMessageId + 1,
      text: suggestion,
      sender: 'user',
      timestamp: new Date()
    };

    // Batch state updates
    setMessages(prev => [...prev, userMessage]);
    setLastMessageId(prev => prev + 1);
    setIsLoading(true);

    try {
      // Yield before network request
      await yieldToMain();
      
      const botResponse = await sendToWebhook(suggestion);
      await addBotMessage(botResponse);
    } catch (error) {
      await addBotMessage(getEnhancedFallbackResponse(suggestion));
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, lastMessageId, sendToWebhook, addBotMessage]);

  // Ultra-simplified animations - compositor-only properties for maximum performance
  const buttonVariants = useMemo(() => ({
    hidden: { 
      scale: 0.9, 
      opacity: 0,
      // Use transform-only properties for GPU acceleration
      rotateZ: 0
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotateZ: 0,
      transition: { 
        duration: 0.15,  // Shorter duration
        ease: "easeOut"
      } 
    },
    exit: { 
      scale: 0.9, 
      opacity: 0,
      rotateZ: 0,
      transition: { 
        duration: 0.1  // Even faster exit
      } 
    }
  }), []);

  const chatVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      scale: 0.95,  // Smaller scale change
      rotateZ: 0
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateZ: 0,
      transition: { 
        duration: 0.15,  // Shorter duration
        ease: "easeOut"
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      rotateZ: 0,
      transition: { 
        duration: 0.1  // Faster exit
      } 
    }
  }), []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat Toggle Button - Mobile Optimized */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsOpen(true)}
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg flex items-center justify-center touch-manipulation ${
              darkMode
                ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                : 'bg-gradient-to-r from-blue-500 to-purple-500'
            }`}
            style={{
              // Ensure minimum touch target size for mobile (44px)
              minWidth: '44px',
              minHeight: '44px'
            }}
          >
            <FiMessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window - Mobile Optimized */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`absolute flex flex-col overflow-hidden ${
              // Mobile: Better sizing - larger message area, proper proportions
              'bottom-2 right-2 w-[90vw] h-[80vh] max-w-sm max-h-[600px] rounded-2xl sm:bottom-0 sm:right-0 sm:w-96 sm:h-[500px]'
            } shadow-2xl border ${
              darkMode
                ? 'bg-gray-900 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
            style={{ zIndex: 100 }}
          >
            {/* Chat Header - Mobile Optimized */}
            <div className={`p-3 sm:p-4 border-b flex items-center justify-between ${
              darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <FiCpu className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    AI Assistant
                  </h3>
                  <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Ask about Suraj's work
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-lg transition-colors touch-manipulation ${
                  darkMode
                    ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
                    : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                style={{
                  // Ensure minimum touch target size
                  minWidth: '44px',
                  minHeight: '44px'
                }}
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Container - Mobile Optimized with Virtual Scrolling */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 overscroll-bounce">
              {/* Mobile-optimized message virtualization */}
              {messages.length > 15 ? (
                // More aggressive virtualization on mobile for better performance
                <div 
                  style={{ height: '100%' }}
                  className="touch-pan-y"
                  onScroll={(e) => {
                    // Throttle scroll events for mobile performance
                    const target = e.target;
                    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 20) {
                      // Near bottom, no special handling needed
                    }
                  }}
                >
                  {/* Show only last 10 messages on mobile, 15 on desktop */}
                  {messages.slice(window.innerWidth < 640 ? -10 : -15).map((message) => (
                    <Message key={message.id} message={message} darkMode={darkMode} />
                  ))}
                </div>
              ) : (
                // Normal rendering for small lists
                messages.map((message) => (
                  <Message key={message.id} message={message} darkMode={darkMode} />
                ))
              )}

              {/* Mobile-Optimized Loading Indicator */}
              {isLoading && (
                <div className="flex justify-start mb-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <FiCpu className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-2 ${
                      darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100'
                    }`}>
                      <div className="flex space-x-1">
                        {/* Simplified loading dots for mobile */}
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${
                          darkMode ? 'bg-gray-500' : 'bg-gray-600'
                        }`} />
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${
                          darkMode ? 'bg-gray-500' : 'bg-gray-600'
                        }`} style={{ animationDelay: '100ms' }} />
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${
                          darkMode ? 'bg-gray-500' : 'bg-gray-600'
                        }`} style={{ animationDelay: '200ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile-Optimized Quick Suggestions */}
              {messages.length === 1 && (
                <div className="mb-3">
                  <QuickSuggestions 
                    suggestions={quickSuggestions}
                    darkMode={darkMode}
                    onSuggestionClick={handleSuggestionClick}
                  />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Mobile Optimized with compact design */}
            <div className={`p-3 sm:p-4 border-t ${
              darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Something ..."
                  disabled={isLoading}
                  className={`flex-1 px-3 py-2 sm:px-4 sm:py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm sm:text-base ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  style={{
                    // Prevent zoom on iOS
                    fontSize: '16px'
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white transition-opacity disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation flex-shrink-0"
                  style={{
                    // Ensure minimum touch target size but keep compact
                    minWidth: '44px',
                    minHeight: '44px'
                  }}
                >
                  {isLoading ? (
                    <FiLoader className="w-4 h-4 animate-spin" />
                  ) : (
                    <FiSend className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
