import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { guideInfo } from '@/constants/guideInfo';

const GuideInfo = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <h2 className="mb-4 text-lg font-semibold text-center">
        예식정보 및 안내사항
      </h2>
      <Tabs defaultValue="meal" className="w-full">
        {/* 탭 버튼 리스트 */}
        <TabsList className="grid grid-cols-2 p-0 rounded-none">
          {guideInfo.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="m-1 border border-transparent rounded-t-lg px-4 py-2 text-gray-500 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:border-gray-500 data-[state=active]:border-b-0 "
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* 탭 컨텐츠 */}
        {guideInfo.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-0">
            <Card className="border border-gray-200 shadow-sm ">
              <CardContent className="p-4 text-center text-black ">
                {tab.content.split('\n').map((line, index) => (
                  <div key={index}>
                    {line}
                    <br />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default GuideInfo;
