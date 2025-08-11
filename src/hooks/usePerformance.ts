import { useMediaQuery } from 'react-responsive';
import { useMemo } from 'react';

export const usePerformance = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });

  const performanceConfig = useMemo(
    () => ({
      isMobile,
      isTablet,
      isSmall,
      // Animation settings
      animationFPS: isMobile ? 30 : 60,
      enableComplexAnimations: !isMobile,
      enablePointerTracking: !isMobile,
      reduceMotion: isMobile,

      // 3D settings
      enable3D: !isMobile,
      dpr: isMobile ? 1 : window.devicePixelRatio,
      antialias: !isMobile,

      // Scroll settings
      scrollThrottle: isMobile ? 32 : 16, // ms
      enableSmoothScroll: !isMobile,
    }),
    [isMobile, isTablet, isSmall]
  );

  return performanceConfig;
};

export default usePerformance;
