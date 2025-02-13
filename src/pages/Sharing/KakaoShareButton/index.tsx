import { Button } from '@/components/ui/button';
import KakaoIcon from '@/assets/icons/kakao.svg';
import useKakaoSDK from '@/pages/Sharing/components/useKakaoSDK';

const KakaoShareButton = () => {
  const currentUrl = window.location.href; // 현재 페이지 URL
  useKakaoSDK(); // 카카오 SDK 로드 커스텀 훅
  // ✅ 카카오톡 공유하기
  const shareKakao = () => {
    if (!window.Kakao) {
      alert(
        '카카오 SDK가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.'
      );
      return;
    }
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '이동윤 ♥ 서정현 결혼합니다',
        description: '저희의 결혼식에 초대합니다.',
        imageUrl:
          'https://wedding-invitation-olive-two.vercel.app/images/wedding.png',
        link: { mobileWebUrl: currentUrl, webUrl: currentUrl },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
      ],
    });
  };

  return (
    <Button onClick={shareKakao} variant="ghost" className="gap-2 text-lg">
      <img src={KakaoIcon} alt="카카오톡 아이콘" width={24} />
      <p>카카오톡 공유하기</p>
    </Button>
  );
};
export default KakaoShareButton;
