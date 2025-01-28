import { Card } from "@/components/ui/card";
import TopInfo from "@/pages/TopInfo";

export default function App() {
  return (
    <div className="flex items-center justify-center h-full bg-gray-100">
      {/* 초대장 카드 */}
      <Card className="w-full h-full max-w-md bg-white shadow-lg rounded-xl">
        <TopInfo />
      </Card>
    </div>
  );
}
