import React from 'react';

interface MapButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  icon?: string;
}

const MapButton = ({ onClick, children, icon }: MapButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-1 text-center items-center justify-center cursor-pointer gap-2 my-2 ${
        children !== '티맵' ? 'border-r' : ''
      }`}
    >
      <img src={icon} className="w-3 h-3" />
      <span className="text-sm font-pretendard">{children}</span>
    </div>
  );
};

export default MapButton;
