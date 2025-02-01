import { CardContent } from "@/components/ui/card";
import WeddingTitle from "@/pages/TopInfo/components/WeddingTitle";
import CoupleName from "@/pages/TopInfo/components/CoupleName";
import MainImage from "@/pages/TopInfo/components/MainImage";
import WeddingInfo from "@/pages/TopInfo/components/WeddingInfo";
import Lovemessage from "@/pages/TopInfo/components/LoveMessage";

const TopInfo = () => {
  return (
    <CardContent className="pt-10 text-center">
      {/* 웨딩 타이틀 (웨딩 폰트 적용) */}
      <WeddingTitle />

      {/* 신랑 & 신부 이름 */}
      <CoupleName />

      {/* 결혼식 이미지 + 비디오 */}
      <MainImage />

      {/* 러브 메시지 */}
      <Lovemessage />

      {/* 날짜 및 장소 */}
      <WeddingInfo />
    </CardContent>
  );
};
export default TopInfo;
