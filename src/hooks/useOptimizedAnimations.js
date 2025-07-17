import { useMemo } from 'react';
import { getDeviceCapabilities } from '../utils/performance';

// Hook for performance-optimized animations
export const useOptimizedAnimations = () => {
  const { reducedMotion, slowDevice, touchDevice } = getDeviceCapabilities();

  const animationConfig = useMemo(() => {
    // No animations for reduced motion preference
    if (reducedMotion) {
      return {
        duration: 0,
        delay: 0,
        disabled: true,
        variants: {
          hidden: { opacity: 1 },
          visible: { opacity: 1 }
        }
      };
    }

    // Fast animations for slow devices
    if (slowDevice) {
      return {
        duration: 0.2,
        delay: 0.05,
        disabled: false,
        variants: {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.2 } }
        }
      };
    }

    // Medium animations for touch devices
    if (touchDevice) {
      return {
        duration: 0.3,
        delay: 0.1,
        disabled: false,
        variants: {
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
        }
      };
    }

    // Full animations for desktop
    return {
      duration: 0.5,
      delay: 0.1,
      disabled: false,
      variants: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }
    };
  }, [reducedMotion, slowDevice, touchDevice]);

  return animationConfig;
};

// Simplified motion props generator
export const getMotionProps = (type = 'default') => {
  const config = useOptimizedAnimations();
  
  if (config.disabled) {
    return {};
  }

  const baseProps = {
    initial: config.variants.hidden,
    whileInView: config.variants.visible,
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: config.duration }
  };

  switch (type) {
    case 'stagger':
      return {
        ...baseProps,
        transition: { 
          duration: config.duration,
          staggerChildren: config.delay
        }
      };
    
    case 'hover':
      return {
        ...baseProps,
        whileHover: config.disabled ? {} : { scale: 1.02 }
      };
    
    case 'tap':
      return {
        ...baseProps,
        whileTap: config.disabled ? {} : { scale: 0.98 }
      };
    
    default:
      return baseProps;
  }
};
