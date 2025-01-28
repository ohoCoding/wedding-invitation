import { CardContent } from "@/components/ui/card";
import mainImage from "@/assets/images/image.png";
import { loveMessages } from "@/constants/lovemessage";

const TopInfo = () => {
  return (
    <CardContent className="p-6 text-center">
      {/* 결혼식 타이틀 */}
      <h3 className="text-sm tracking-widest text-gray-500 uppercase">
        THE WEDDING OF
      </h3>

      {/* 신랑 & 신부 이름 */}
      <h1 className="mt-2 text-2xl text-gray-900 font-batang">
        이동윤 <span className="text-gray-500">그리고</span> 이하나
      </h1>

      {/* 결혼식 이미지 */}
      <div className="mt-4">
        <img
          src={mainImage}
          alt="Wedding"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* 러브 메시지 */}
      <div className="flex text-center items-center justify-center leading-[2.2rem] text-[1rem] font-batang tracking-normal whitespace-pre">
        {loveMessages.map((message, index) => (
          <p key={index} className="mt-4 text-lg text-gray-600 font-batang">
            {message.value}
          </p>
        ))}
      </div>

      {/* 날짜 및 장소 */}
      <div className="mt-4 text-sm text-gray-700">
        <p>📅 2025년 6월 28일 토요일 오후 1시 30분</p>
        <p>📍 아펠가모 광화문 B2 로스타노홀</p>
      </div>
    </CardContent>
  );
};
export default TopInfo;
