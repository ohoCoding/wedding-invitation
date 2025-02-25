import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
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
      <Link size={18} color="#434343" />
      <p className="text-sm">링크주소 복사하기</p>
    </Button>
  );
};
export default LinkShareButton;
