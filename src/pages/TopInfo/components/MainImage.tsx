import maintopImage from '@/assets/images/maintopImage.png';
const MainImage = () => {
  return (
    <div className="relative mt-6 mx-auto w-[82%] min-h-[80px] leading-none z-0 rounded-tl-[500px] rounded-tr-[500px] overflow-hidden">
      {/* 배경 비디오 (이미지 위에 위치) */}
      <video
        className="absolute top-0 left-0 z-10 object-cover w-full h-full opacity-5 brightness-140 contrast-110"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://mcard.fromtoday.co.kr/mcard/assets/flower_00.mp4"
          type="video/mp4"
        />
      </video>

      {/* 이미지 (비디오 아래 배치) */}
      <img
        src={maintopImage}
        alt="Wedding"
        className="relative z-0 w-full shadow-lg"
      />
    </div>
  );
};

export default MainImage;
