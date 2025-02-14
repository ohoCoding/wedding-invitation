import { CardContent } from '@/components/ui/card';
import Address from '@/pages/HowToCome/components/Address';
import Map from '@/pages/HowToCome/components/Map';
import WayToCome from '@/pages/HowToCome/components/WayToCome';

const HowToCome = () => {
  return (
    <CardContent className="p-0 py-10 text-center ">
      <Address />
      <Map />
      <WayToCome />
    </CardContent>
  );
};

export default HowToCome;
