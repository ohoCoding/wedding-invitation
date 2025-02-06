import { useState, useRef, useEffect } from 'react';
import { GalleryType } from '@/types';

const Carousel = () => {
  // 환경변수에서 이미지 URL 가져오기
  const imageURLFromENV = import.meta.env.VITE_APP_CLOUDFRONT_URL;

  // 이미지 URL을 환경변수에서 가져와서 이미지 리스트 생성
  const parsedImages: GalleryType[] = Array.from({ length: 19 }).map(
    (_, index) => ({
      id: index + 1,
      src: `${imageURLFromENV}/images/react_wedding_invitation_${index}.jpg`,
      alt: String(index + 1),
    })
  );

  // 무한루프를 위해 마지막 이미지를 맨 앞에, 첫 번째 이미지를 맨 뒤에 추가
  const extendedImages: GalleryType[] = parsedImages.length
    ? [parsedImages[parsedImages.length - 1], ...parsedImages, parsedImages[0]]
    : [];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 자동 슬라이드: 드래그 중이 아닐 떄마다 3초후 다음 슬라이드 이동
  useEffect(() => {
    if (!parsedImages.length) return; // 이미지가 없으면 타이머 설정 X
    if (dragging) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, dragging, parsedImages.length]);

  // transition 종료 후 클론이미지에서 실제 이미지로 인덱스 보정
  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setCurrentIndex(parsedImages.length);
      if (containerRef.current) {
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(-${
          parsedImages.length * 100
        }%)`;
        // getBoundingClientRect() 호출로 reflow 강제 (함수 호출이므로 ESLint 경고가 발생하지 않음)
        containerRef.current.getBoundingClientRect();
        containerRef.current.style.transition = 'transform 300ms ease-out';
      }
    } else if (currentIndex === parsedImages.length + 1) {
      setCurrentIndex(1);
      if (containerRef.current) {
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(-100%)`;
        // getBoundingClientRect() 호출로 reflow 강제 (함수 호출이므로 ESLint 경고가 발생하지 않음)
        containerRef.current.getBoundingClientRect();
        containerRef.current.style.transition = 'transform 300ms ease-out';
      }
    }
  };

  // 드래그 시작: 시작 X 좌표 저장
  const handleDragStart = (clientX: number) => {
    setDragStartX(clientX);
    setDragging(true);
  };

  // 드래그 중: 이동 거리 업데이트
  const handleDragMove = (clientX: number) => {
    if (!dragging || dragStartX === null) return;
    const deltaX = clientX - dragStartX;
    setTranslateX(deltaX);
  };

  // 드래그 종료: 임계치(50px)를 넘으면 슬라이드 전환 (무한 순환)
  const handleDragEnd = () => {
    if (!dragging) return;

    if (translateX < -50) {
      // 오른쪽으로 드래그 -> 다음 슬라이드 (마지막이면 0으로)
      setCurrentIndex((prev) => prev + 1);
    } else if (translateX > 50) {
      // 왼쪽으로 드래그 -> 이전 슬라이드 (0이면 마지막 슬라이드로)
      setCurrentIndex((prev) => prev - 1);
    }
    setTranslateX(0);
    setDragging(false);
    setDragStartX(null);
  };

  return (
    <div className="relative w-full overflow-hidden border bg-background">
      <div
        ref={containerRef}
        className="flex transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(calc(-${
            currentIndex * 100
          }% + ${translateX}px))`,
        }}
        onTransitionEnd={handleTransitionEnd}
        onMouseDown={(e) => {
          e.preventDefault();
          handleDragStart(e.clientX);
        }}
        onMouseMove={(e) => {
          if (dragging) {
            e.preventDefault();
            handleDragMove(e.clientX);
          }
        }}
        onMouseUp={(e) => {
          e.preventDefault();
          handleDragEnd();
        }}
        onMouseLeave={(e) => {
          if (dragging) {
            e.preventDefault();
            handleDragEnd();
          }
        }}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        {extendedImages.map((item, index) => (
          <div className="flex-shrink-0 w-full" key={index}>
            <img
              loading={index === currentIndex ? 'eager' : 'lazy'}
              className="object-cover w-full h-auto"
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
