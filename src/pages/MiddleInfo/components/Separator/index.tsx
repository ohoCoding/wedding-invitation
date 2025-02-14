import squareImage from '@/assets/images/square.png';

const Separator = () => {
  return (
    <div className="w-full mb-12 flex items-center justify-center">
      <img alt="1" src={squareImage} className="w-2 mx-1 grayscale" />
      <img alt="2" src={squareImage} className="w-2 mx-1 grayscale" />
      <img alt="3" src={squareImage} className="w-2 mx-1 grayscale" />
    </div>
  );
};

export default Separator;
