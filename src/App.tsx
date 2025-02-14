import { Card } from '@/components/ui/card';
import Calendar from '@/pages/Calendar';
import HowToCome from '@/pages/HowToCome';
import MiddleInfo from '@/pages/MiddleInfo';
import TopInfo from '@/pages/TopInfo';
import Gallery from '@/pages/Gallery';
import GuideInfo from '@/pages/GuideInfo';
import BlessingMoney from '@/pages/BlessingMoney';
import Sharing from '@/pages/Sharing/index';
import { Toaster } from '@/components/ui/toaster';
import useSequentialFadeIn from './hooks/useSequentialFadeIn';

export default function App() {
  const components = [
    TopInfo,
    MiddleInfo,
    Calendar,
    Gallery,
    HowToCome,
    GuideInfo,
    BlessingMoney,
    Sharing,
  ];
  const visibleIndex = useSequentialFadeIn(components.length, 2000); // 2초 간격으로 등장

  return (
    <div className="flex items-center justify-center h-full bg-margin-bg">
      <Card className="w-full h-full max-w-md bg-white shadow-lg rounded-xl">
        {components.map((Component, index) => (
          <div
            key={index}
            className={`transition-all duration-[1500ms] ease--out transform ${
              index < visibleIndex
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Component />
          </div>
        ))}
        <Toaster />
      </Card>
    </div>
  );
}
