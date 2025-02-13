import { useEffect } from 'react';

const useKakaoSDK = () => {
  useEffect(() => {
    const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY; // 환경 변수에서 API 키 가져오기

    if (!kakaoKey) {
      console.error('Kakao JavaScript Key가 설정되지 않았습니다.');
      return;
    }

    // `window.Kakao`가 로드될 때까지 기다린 후 초기화
    const checkKakaoLoaded = setInterval(() => {
      // Kakao SDK 로드 확인
      if (window.Kakao) {
        // Kakao SDK 초기화
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(kakaoKey);
        }
        // Kakao SDK 로드 완료 시 clearInterval
        if (window.Kakao.Link) {
          clearInterval(checkKakaoLoaded);
        }
      }
    }, 500);
    // 컴포넌트 언마운트 시 제거
    return () => clearInterval(checkKakaoLoaded);
  }, []);
};

export default useKakaoSDK;
