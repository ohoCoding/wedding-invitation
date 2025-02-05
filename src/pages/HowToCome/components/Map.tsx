import { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(37.5594054, 126.9817843),
        zoom: 16,
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.5594054, 126.9817843),
        map: map,
      });
    };
    initMap();
  }, []);

  //지도 사이즈 관련 스타일
  const mapStyle = {
    width: '100%',
    height: '300px',
  };

  return (
    <div className="mb-4">
      <div id="map" style={mapStyle}></div>
    </div>
  );
};

export default Map;
