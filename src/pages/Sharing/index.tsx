import { CardContent } from '@/components/ui/card';
import KakaoShareButton from '@/pages/Sharing/KakaoShareButton';
import LinkShareButton from '@/pages/Sharing/LinkShareButton';

const Sharing = () => {
  return (
    <CardContent className="flex flex-col p-0 py-10 text-center">
      <KakaoShareButton />
      <LinkShareButton />
    </CardContent>
  );
};
export default Sharing;
