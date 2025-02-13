import { useEffect } from 'react';

const useKakaoSDK = () => {
  useEffect(() => {
    // 환경 변수에서 API 키 가져오기
    const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY;

    if (!kakaoKey) {
      console.error('Kakao JavaScript Key가 설정되지 않았습니다.');
      return;
    }

    // `window.Kakao`가 로드될 때까지 기다린 후 초기화
    const checkKakaoLoaded = setInterval(() => {
      // `window.Kakao`가 정의되어 있고 `window.Kakao.isInitialized`가 함수일 때
      if (
        typeof window.Kakao !== 'undefined' &&
        typeof window.Kakao.isInitialized === 'function'
      ) {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(kakaoKey);
        }
        if (window.Kakao.Share !== undefined) {
          clearInterval(checkKakaoLoaded);
        }
      }
    }, 500);

    // 일정 시간이 지나도 `window.Kakao.Link`가 없으면 타임아웃
    setTimeout(() => {
      clearInterval(checkKakaoLoaded);
    }, 10000); // 10초 후 강제 중단

    // 컴포넌트 언마운트 시 `clearInterval`
    return () => clearInterval(checkKakaoLoaded);
  }, []);
};

export default useKakaoSDK;
