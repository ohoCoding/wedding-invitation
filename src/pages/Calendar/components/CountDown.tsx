import { useEffect, useState } from 'react';

const CountDown = () => {
  const targetDate = new Date('2025-04-05T15:00:00').getTime();
  const [timer, setTimer] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const { days, hours, minutes, seconds } = formatTime(timer);

  return (
    <>
      <div className="w-full leading-8 mb-5">
        <div className="inline-block align-top">
          <div className="text-[#999999] text-[10px]">DAYS</div>
          <span className="text-xl px-4">{days}</span>
        </div>
        <div className="inline-block align-top">
          <div className="text-[#999999] text-[10px]">&nbsp;</div>
          <span className="text-xs">:</span>
        </div>
        <div className="inline-block align-top">
          <div className="text-[#999999] text-[10px]">HOUR</div>
          <span className="text-xl px-4">{hours}</span>
        </div>
        <div className="inline-block align-top">
          <div className="text-[#999999] text-[10px]">&nbsp;</div>
          <span className="text-xs">:</span>
        </div>
        <div className="inline-block align-top">
          <div className="text-[#999999] text-[10px]">MIN</div>
          <span className="text-xl px-4">{minutes}</span>
        </div>
        <div className="inline-block align-top">
          <div className="text-[#999999] text-[10px]">&nbsp;</div>
          <span className="text-xs">:</span>
        </div>
        <div className="inline-block align-top">
          <div className="text-[#999999] text-[10px]">SEC</div>
          <span className="text-xl px-4">{seconds}</span>
        </div>
      </div>

      <div>
        <span>동윤🩷정현 의 결혼식이&nbsp;</span>
        <span>
          <span className="text-[#ea7664]">{days + 1}일</span>
          <span>&nbsp;남았습니다.</span>
        </span>
      </div>
    </>
  );
};

export default CountDown;
