import { Card } from '@/components/ui/card';
import Calendar from '@/pages/Calendar/Calendar';
import HowToCome from '@/pages/HowToCome/HowToCome';
import MiddleInfo from '@/pages/MiddleInfo/MiddleInfo';
import TopInfo from '@/pages/TopInfo';
import Gallery from '@/pages/Gallery';
import GuideInfo from '@/pages/GuideInfo';
import BlessingMoney from '@/pages/BlessingMoney/BlessingMoney';
import Sharing from '@/pages/Sharing/index';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <div className="flex items-center justify-center h-full bg-margin-bg">
      {/* 초대장 카드 */}
      <Card className="w-full h-full max-w-md bg-white shadow-lg rounded-xl">
        <TopInfo />
        <MiddleInfo />
        <Calendar />
        <Gallery />
        <HowToCome />
        <GuideInfo />
        <BlessingMoney />
        <Sharing />
        <Toaster />
      </Card>
    </div>
  );
}
