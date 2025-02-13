const CoupleNames = () => {
  return (
    <div className="w-[calc(100%-48px)] px-[24px] mx-auto flex justify-center gap-4 text-[1.16rem]">
      {/* 신랑 이름 */}
      <div className="flex leading-8 flex-col justify-center text-right text-xl text-[#2b2222] z-10">
        이동윤
      </div>

      {/* "그리고" 문구 */}
      <div className="flex items-center leading-8 justify-center text-sm text-[#2b2222] z-10">
        그리고
      </div>

      {/* 신부 이름 */}
      <div className="flex flex-col leading-8 justify-center text-left text-xl text-[#2b2222] z-10">
        서정현
      </div>
    </div>
  );
};

export default CoupleNames;
