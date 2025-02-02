import { Card } from '@/components/ui/card';
import MiddleInfo from '@/pages/MiddleInfo/MiddleInfo';
import TopInfo from '@/pages/TopInfo';

export default function App() {
  return (
    <div className="flex items-center justify-center h-full bg-margin-bg">
      {/* 초대장 카드 */}
      <Card className="w-full h-full max-w-md bg-white shadow-lg rounded-xl">
        <TopInfo />
        <MiddleInfo />
      </Card>
    </div>
  );
}
