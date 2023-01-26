import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';

export const useScreen = () => {
  const [currentScreen, setCurrentScreen] = useState();
  const theme = useTheme();

  const tabletStartSize = theme.breakpoints.values.tablet;
  const desktopStartSize = theme.breakpoints.values.desktop;

  useEffect(() => {
    const checkScreenWidth = () => {
      const pageWidth = window.innerWidth;

      if (pageWidth < tabletStartSize && currentScreen !== 'mobile')
        return setCurrentScreen('mobile');

      if (
        pageWidth >= tabletStartSize &&
        pageWidth < desktopStartSize &&
        currentScreen !== 'tablet'
      )
        return setCurrentScreen('tablet');

      if (pageWidth >= desktopStartSize && currentScreen !== 'desktop')
        return setCurrentScreen('desktop');
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  }, [currentScreen, desktopStartSize, tabletStartSize]);

  return currentScreen;
};
