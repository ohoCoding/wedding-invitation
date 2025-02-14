import Contacting from '@/pages/MiddleInfo/components/Greetings/Contacting';
import GreetingMessage from '@/pages/MiddleInfo/components/Greetings/GrettingMessage';

const Greetings = () => {
  return (
    <div className="py-10">
      {/* 소중한 분들을 초대합니다 메세지 */}
      <GreetingMessage />

      {/* 연락하기 */}
      <Contacting />
    </div>
  );
};

export default Greetings;
