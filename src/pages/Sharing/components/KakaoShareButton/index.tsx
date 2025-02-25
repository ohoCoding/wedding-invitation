import { Button } from '@/components/ui/button';
import KakaoIcon from '@/assets/icons/kakao.svg';
import useKakaoSDK from '@/hooks/useKakaoSDK';

const KakaoShareButton = () => {
  useKakaoSDK(); // 카카오 SDK 로드 커스텀 훅

  // 카카오톡 공유하기
  const shareKakao = () => {
    if (!window.Kakao) {
      alert('카카오 SDK가 아직 로드되지 않았습니다.');
      return;
    }
    if (!window.Kakao.isInitialized()) {
      alert('카카오 SDK가 초기화되지 않았습니다.');
      return;
    }

    if (!window.Kakao.Share) {
      alert('카카오 링크 기능이 초기화되지 않았습니다.');
      return;
    }
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '이동윤 ♥ 서정현 결혼합니다',
        description: '저희의 결혼식에 초대합니다.',
        imageUrl:
          'https://wedding-invitation-olive-two.vercel.app/images/wedding.png',
        link: {
          mobileWebUrl: 'https://wedding-invitation-olive-two.vercel.app',
          webUrl: 'https://wedding-invitation-olive-two.vercel.app',
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: 'https://wedding-invitation-olive-two.vercel.app',
            webUrl: 'https://wedding-invitation-olive-two.vercel.app',
          },
        },
      ],
    });
  };

  return (
    <Button onClick={shareKakao} variant="ghost" className="gap-2 text-lg">
      <img
        src={KakaoIcon}
        alt="카카오톡 아이콘"
        width={18}
        className="grayscale"
      />
      <p className="text-sm">카카오톡 공유하기</p>
    </Button>
  );
};
export default KakaoShareButton;
