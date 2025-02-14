import { CardContent } from '@/components/ui/card';
import Greetings from '@/pages/MiddleInfo/components/Greetings';
import QuoteContent from '@/pages/MiddleInfo/components/QuoteContent';
import Separator from '@/pages/MiddleInfo/components/Separator';

const MiddleInfo = () => {
  return (
    <CardContent className="p-0 pt-10 text-center">
      {/* 구분선 */}
      <Separator />

      {/* 곰돌이 푸 인용문 */}
      <QuoteContent />

      {/* 초대 메세지, 이미지 및 연락하기 */}
      <Greetings />
    </CardContent>
  );
};

export default MiddleInfo;
