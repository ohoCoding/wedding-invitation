import { CardContent } from '@/components/ui/card';
import DragCarousel from '@/pages/Gallery/components/DragCarousel';

const Gallery = () => {
  return (
    <CardContent className="p-0 py-10 text-center">
      <div className="mb-5 text-xl text-center">갤러리</div>
      <DragCarousel />
    </CardContent>
  );
};
export default Gallery;
