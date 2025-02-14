import { CardContent } from '@/components/ui/card';
import KakaoShareButton from '@/pages/Sharing/components/KakaoShareButton';
import LinkShareButton from '@/pages/Sharing/components/LinkShareButton';

const Sharing = () => {
  return (
    <CardContent className="flex flex-col p-0 pt-5 pb-8 text-center bg-gray-100 border-t rounded-xl">
      <KakaoShareButton />
      <LinkShareButton />
    </CardContent>
  );
};
export default Sharing;
