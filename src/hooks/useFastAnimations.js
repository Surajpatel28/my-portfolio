import { useEffect, useRef, useState } from 'react';

// Ultra-fast intersection observer for scroll animations
export const useFastScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // High-performance intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after first trigger for performance
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
        ...options
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [elementRef, isVisible];
};

// Staggered animations hook
export const useStaggeredAnimation = (itemCount, delay = 50) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger animation trigger
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]));
            }, i * delay);
          }
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [itemCount, delay]);

  return [containerRef, visibleItems];
};

// Micro-interaction hook for buttons
export const useMicroInteraction = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlers = {
    onMouseDown: () => setIsPressed(true),
    onMouseUp: () => setIsPressed(false),
    onMouseLeave: () => setIsPressed(false),
    onTouchStart: () => setIsPressed(true),
    onTouchEnd: () => setIsPressed(false),
  };

  return [isPressed, handlers];
};
