import React from 'react';

const BlessingContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="leading-8 mb-8">
        <p>참석이 어려우신 분들을 위해</p>
        <p>계좌번호를 기재하였습니다.</p>
        <p>너그러운 마음으로 양해 부탁드립니다.</p>
      </div>
      {children}
    </div>
  );
};

export default BlessingContent;
