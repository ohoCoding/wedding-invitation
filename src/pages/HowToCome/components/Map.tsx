import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';

const Map = () => {
  return (
    <MapDiv
      style={{
        width: '100%',
        height: '600px',
      }}
    >
      <NaverMap>
        <Marker defaultPosition={{ lat: 37.5666103, lng: 126.9783882 }} />
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
