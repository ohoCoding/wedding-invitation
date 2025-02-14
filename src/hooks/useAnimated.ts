import { useEffect, useRef, useState } from "react";

const useAnimated = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 한번 보이면 더 이상 관찰할 필요 없음
          observer.unobserve(entry.target);
        }
      },
      {
        // 10% 정도만 보여도 애니메이션 시작
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element); // cleanup 함수에서 저장한 element 사용
    };
  }, []);

  return { containerRef, isVisible };
};

export default useAnimated;
