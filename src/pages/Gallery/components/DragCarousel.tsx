import { useState, useRef, useEffect } from "react";
import { GalleryType } from "@/types";
import Pagination from "./Pagination";

const Carousel = () => {
  // 환경변수에서 이미지 URL 가져오기
  const imageURLFromENV = import.meta.env.VITE_APP_CLOUDFRONT_URL;

  // 이미지 URL을 환경변수에서 가져와서 이미지 리스트 생성
  const parsedImages: GalleryType[] = Array.from({ length: 20 }).map(
    (_, index) => ({
      id: index + 1,
      src: `${imageURLFromENV}/images/react_wedding_invitation_${index}.jpg`,
      alt: String(index + 1),
    })
  );

  // 무한 루프 구현을 위해 첫 번째와 마지막 이미지를 추가
  const extendedImages: GalleryType[] = parsedImages.length
    ? [parsedImages[parsedImages.length - 1], ...parsedImages, parsedImages[0]]
    : [];

  // 현재 슬라이드 상태
  const [currentIndex, setCurrentIndex] = useState(1);
  // 드래그 시작 위치 (X, Y 좌표)
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragStartY, setDragStartY] = useState<number | null>(null);
  // 드래그 중인지 여부
  const [dragging, setDragging] = useState(false);
  // 세로 스크롤 여부 확인
  const [isVerticalScroll, setIsVerticalScroll] = useState(false);
  // 현재 슬라이드 이동 거리
  const [translateX, setTranslateX] = useState(0);
  // 슬라이드 컨테이너 참조
  const containerRef = useRef<HTMLDivElement>(null);

  // 자동 슬라이드 (드래그 중이 아닐 때 3초마다 다음 슬라이드 이동)
  useEffect(() => {
    if (!parsedImages.length) return;
    if (dragging) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, dragging, parsedImages.length]);

  // transition 종료 후 클론 이미지에서 실제 이미지로 인덱스 보정
  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setCurrentIndex(parsedImages.length);
      if (containerRef.current) {
        containerRef.current.style.transition = "none";
        containerRef.current.style.transform = `translateX(-${
          parsedImages.length * 100
        }%)`;
        containerRef.current.getBoundingClientRect(); // reflow 강제
        containerRef.current.style.transition = "transform 300ms ease-out";
      }
    } else if (currentIndex === parsedImages.length + 1) {
      setCurrentIndex(1);
      if (containerRef.current) {
        containerRef.current.style.transition = "none";
        containerRef.current.style.transform = `translateX(-100%)`;
        containerRef.current.getBoundingClientRect(); // reflow 강제
        containerRef.current.style.transition = "transform 300ms ease-out";
      }
    }
  };

  // 드래그 시작: 터치 시작 위치 저장
  const handleDragStart = (clientX: number, clientY: number) => {
    setDragStartX(clientX);
    setDragStartY(clientY);
    setDragging(true);
    setIsVerticalScroll(false);
  };

  // 드래그 이동: X, Y 이동 거리 계산
  const handleDragMove = (clientX: number, clientY: number, e?: Event) => {
    if (!dragging || dragStartX === null || dragStartY === null) return;

    const deltaX = clientX - dragStartX;
    const deltaY = clientY - dragStartY;

    // 수직 이동이 수평 이동보다 크면 세로 스크롤 허용
    if (!isVerticalScroll) {
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        setIsVerticalScroll(true); // 세로 스크롤 모드 활성화
        return;
      } else {
        setIsVerticalScroll(false); // 가로 슬라이드 모드 유지
        if (e) e.preventDefault(); // 가로 슬라이드시 세로 스크롤 차단
      }
    }

    setTranslateX(deltaX);
  };

  // 드래그 종료: 슬라이드 전환 또는 원래 위치로 복귀
  const handleDragEnd = () => {
    if (!dragging) return;

    if (!isVerticalScroll) {
      if (translateX < -50) {
        setCurrentIndex((prev) => prev + 1);
      } else if (translateX > 50) {
        setCurrentIndex((prev) => prev - 1);
      }
    }

    // 상태 초기화
    setTranslateX(0);
    setDragging(false);
    setDragStartX(null);
    setDragStartY(null);
  };

  return (
    <div className="relative w-full overflow-hidden bg-background">
      <div
        ref={containerRef}
        className="flex transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(calc(-${
            currentIndex * 100
          }% + ${translateX}px))`,
        }}
        onTransitionEnd={handleTransitionEnd}
        // 마우스 이벤트
        onMouseDown={(e) => {
          e.preventDefault();
          handleDragStart(e.clientX, e.clientY);
        }}
        onMouseMove={(e) => {
          if (dragging) {
            e.preventDefault();
            handleDragMove(e.clientX, e.clientY);
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
        // 터치 이벤트
        onTouchStart={(e) =>
          handleDragStart(e.touches[0].clientX, e.touches[0].clientY)
        }
        onTouchMove={(e) =>
          handleDragMove(e.touches[0].clientX, e.touches[0].clientY)
        }
        onTouchEnd={handleDragEnd}
      >
        {extendedImages.map((item, index) => (
          <div className="flex-shrink-0 w-full" key={index}>
            <img
              loading={index === currentIndex ? "eager" : "lazy"}
              className="object-cover w-full h-auto"
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
      <Pagination currentIndex={currentIndex} onPageChange={setCurrentIndex} />
    </div>
  );
};

export default Carousel;
