// Performance optimization utilities for mobile devices

// Detect device capabilities
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') return { 
    reducedMotion: false, 
    touchDevice: false, 
    slowDevice: false, 
    lowBandwidth: false,
    screenSize: 'desktop'
  };
  
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const slowDevice = navigator.hardwareConcurrency <= 2;
  const lowBandwidth = navigator.connection?.effectiveType === '2g' || navigator.connection?.effectiveType === 'slow-2g';
  
  // Enhanced screen size detection
  const width = window.innerWidth;
  let screenSize = 'desktop';
  if (width < 640) screenSize = 'mobile';
  else if (width < 1024) screenSize = 'tablet';
  
  return {
    reducedMotion,
    touchDevice,
    slowDevice,
    lowBandwidth,
    screenSize
  };
};

// Optimized animation variants for different device types
export const getAnimationVariants = () => {
  const { reducedMotion, slowDevice, lowBandwidth, screenSize } = getDeviceCapabilities();
  
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.1 } }
    };
  }
  
  if (slowDevice || lowBandwidth) {
    return {
      hidden: { opacity: 0, y: 10 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.2, ease: "easeOut" } 
      }
    };
  }

  if (screenSize === 'mobile') {
    return {
      hidden: { opacity: 0, y: 15 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.4, ease: "easeOut" } 
      }
    };
  }
  
  return {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };
};

// Lazy loading intersection observer
export const createLazyObserver = (callback) => {
  if (typeof window === 'undefined') return null;
  
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.1
    }
  );
};

// Debounce function for scroll/resize events
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

// Mobile-specific viewport utilities
export const getViewportInfo = () => {
  if (typeof window === 'undefined') return { height: 0, width: 0, isMobile: false };
  
  const height = window.innerHeight;
  const width = window.innerWidth;
  const isMobile = width < 768;
  const isLandscape = width > height;
  
  return { height, width, isMobile, isLandscape };
};

// Optimized touch gesture detection
export const createTouchHandler = (onSwipe) => {
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  };
  
  const handleTouchEnd = (e) => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      onSwipe(deltaX > 0 ? 'right' : 'left');
    }
  };
  
  return { handleTouchStart, handleTouchEnd };
};
