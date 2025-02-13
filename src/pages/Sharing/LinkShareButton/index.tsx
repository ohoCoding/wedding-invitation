import { Button } from '@/components/ui/button';
import Link from '@/assets/icons/link.svg';
const LinkShareButton = () => {
  const currentUrl = window.location.href; // 현재 페이지 URL
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert('링크가 복사되었습니다! ');
    } catch (error) {
      console.log('복사 실패', error);
      alert('링크 복사에 실패했습니다. ');
    }
  };

  return (
    <Button onClick={copyToClipboard} variant="ghost" className="gap-2 text-lg">
      <img src={Link} alt="링크 아이콘" width={24} />
      <span>링크주소 복사하기</span>
    </Button>
  );
};
export default LinkShareButton;
