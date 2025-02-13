import { CardContent } from '@/components/ui/card';
import KakaoShareButton from '@/pages/Sharing/KakaoShareButton';
import LinkShareButton from '@/pages/Sharing/LinkShareButton';

const Sharing = () => {
  return (
    <CardContent className="flex flex-col p-0 pt-5 pb-8 text-center bg-gray-100 border-t">
      <KakaoShareButton />
      <LinkShareButton />
    </CardContent>
  );
};
export default Sharing;
