const Pagination = ({
  currentIndex,
  onPageChange,
}: {
  currentIndex: number;
  onPageChange: (index: number) => void;
}) => {
  const slidesPerCycle = 5; // 한 번에 5개의 슬라이드씩 돌고 초기화
  const currentCycle = Math.ceil(currentIndex / slidesPerCycle); // 현재 몇 번째 사이클인지

  // 동그라미 인덱스를 5개 내에서 순환
  const dotIndex = (currentIndex - 1) % slidesPerCycle;

  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() =>
            onPageChange(index + 1 + (currentCycle - 1) * slidesPerCycle)
          }
          className={`w-3 h-3 rounded-full transition-all ${
            index === dotIndex ? "bg-gray-500 scale-110" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default Pagination;
