import Contacting from '@/pages/MiddleInfo/components/Contacting';
import GreetingMessage from '@/pages/MiddleInfo/components/GreetingMessage';

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
