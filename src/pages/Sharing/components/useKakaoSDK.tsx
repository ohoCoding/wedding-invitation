import { useEffect } from 'react';

const useKakaoSDK = () => {
  useEffect(() => {
    const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY; // 환경 변수에서 API 키 가져오기

    if (!kakaoKey) {
      console.error('Kakao JavaScript Key가 설정되지 않았습니다.');
      return;
    }

    // 이미 `index.html`에 Kakao SDK가 선언되어 있으므로, 다시 로드하지 않고 초기화만 진행
    if (
      typeof window !== 'undefined' &&
      window.Kakao &&
      !window.Kakao.isInitialized()
    ) {
      window.Kakao.init(kakaoKey);
      console.log('Kakao SDK Initialized!');
    }
  }, []);
};

export default useKakaoSDK;
