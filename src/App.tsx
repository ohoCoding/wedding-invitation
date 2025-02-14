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
import AnimatedComponent from '@/AnimatedComponent';

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

  return (
    <div className="flex items-center justify-center h-full bg-margin-bg">
      <Card className="w-full h-full max-w-md bg-white shadow-lg rounded-xl">
      {components.map((Component, index) => (
          <AnimatedComponent key={index} Component={Component} />
        ))}
        <Toaster />
      </Card>
    </div>
  );
}
