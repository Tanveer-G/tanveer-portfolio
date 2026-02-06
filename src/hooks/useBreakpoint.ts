// hooks/useBreakpoint.ts
import { useWindowSize } from './useWindowSize';

export const useBreakpoint = () => {
  const { width } = useWindowSize();
  
  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    isLargeDesktop: width >= 1280,
    currentWidth: width
  };
};