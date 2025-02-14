import { PhoneCall } from 'lucide-react';
const handleCall = () => {
  window.location.href = 'tel:02-2002-3000';
};
const WayToCome = () => {
  return (
    <div className="px-8 leading-8 text-left">
      <div className="py-2">
        <div className="text-[17px]">지하철</div>
        <div className="text-[15px] leading-8">
          <p>
            ⦁<span className="text-blue-500"> 4호선 회현역</span> 1번 출구 (도보
            1분)
          </p>
        </div>
      </div>

      <div className="py-2">
        <div className="text-[17px]">버스</div>
        <div className="text-[15px] leading-8">
          <p>
            간선버스 (<span className="text-blue-500">143, 401, 406</span>)
          </p>
          <p>⦁ 남산 3호터널 하차 후 회현사거리 방향으로 도보 1분</p>
        </div>
      </div>

      <div className="py-2">
        <div className="text-[17px]">자가용</div>
        <div className="text-[15px] leading-8">
          <p>⦁ 서울 중구 소공로 51(회현동 1번지) 우리은행 본점</p>
          <p className="text-sm">
            <div className="flex flex-row transition-transform transform active:scale-98">
              02) 2002-3000 (<PhoneCall size={18} color="#00A8FF" />
              <span onClick={handleCall}>전화 하기</span>)
            </div>
          </p>
        </div>
      </div>

      <div className="py-2">
        <div className="text-[17px]">주차</div>
        <div className="text-[15px] leading-8">
          <p>
            ⦁ 주차 시간 <span className="border-b-2">종일 무료</span>
          </p>
          <p>⦁ 지하 2~3층 결혼식 하객 이용 가능합니다.</p>
          <p>⦁ 자리 부족 시 지하 4층부터 사용 가능합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default WayToCome;
