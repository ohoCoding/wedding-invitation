import middleInfoImage from '@/assets/images/middleInfoImage.png';

const GreetingMessage = () => {
  return (
    <>
      <div className="text-xl font-medium">소중한 분들을 초대합니다</div>

      <div className="m-10 leading-8">
        함께 있을 때 제일 행복하고,
        <br />
        함께 있을 때 제일 웃게 됩니다.
        <br />
        햇살 가득한 4월, <span className="text-[#C28E79]">결혼</span>합니다.
        <br />
        <br />
        와주시는 것만으로도 너무나도 감사합니다.
        <br />
        기쁜 날, 가까이서 <span className="text-[#C28E79]">축복</span>해 주시면
        <br />더 없는 기쁨으로 간직하며 살아가겠습니다.
      </div>

      {/* Content 이미지 */}
      <div className="pt-4">
        <img src={middleInfoImage} className="w-full"></img>
      </div>
    </>
  );
};

export default GreetingMessage;
