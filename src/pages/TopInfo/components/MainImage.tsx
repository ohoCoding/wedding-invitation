import mainImage from "@/assets/images/image.png";
const MainImage = () => {
  return (
    <div className="relative mt-6 mx-auto w-[82%] min-h-[80px] leading-none z-0 rounded-tl-[500px] rounded-tr-[500px] rounded-bl-[6px] rounded-br-[6px] overflow-hidden">
      {/* 배경 비디오 (이미지 위에 위치) */}
      <video
        className="absolute top-0 left-0 z-10 object-cover w-full h-full opacity-10 brightness-125 contrast-110 rounded-2xl"
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
        src={mainImage}
        alt="Wedding"
        className="relative z-0 w-full shadow-lg rounded-2xl"
      />
    </div>
  );
};

export default MainImage;
