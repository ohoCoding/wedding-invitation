import { useState, useEffect } from 'react';

/**
 * @param totalSteps - 나타날 컴포넌트 개수
 * @param delay - 각 컴포넌트가 나타나는 간격 (기본값 800ms)
 */
const useSequentialFadeIn = (totalSteps: number, delay: number = 800) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev < totalSteps ? prev + 1 : prev));
    }, delay);

    return () => clearInterval(interval);
  }, [totalSteps, delay]);

  return visibleIndex;
};

export default useSequentialFadeIn;
