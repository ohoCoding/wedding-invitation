import useAnimated from '@/hooks/useAnimated';

const AnimatedComponent = ({
  Component,
}: {
  Component: React.ComponentType;
}) => {
  const { containerRef, isVisible } = useAnimated();

  return (
    <div
      ref={containerRef}
      className={`transition-all duration-[2000ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Component />
    </div>
  );
};

export default AnimatedComponent;
