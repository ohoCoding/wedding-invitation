import MapButton from '@/pages/HowToCome/components/Map/MapButton';
import { useEffect } from 'react';
import naverMapImage from '@/assets/images/naver_map.webp';
import kakaoMapImage from '@/assets/images/kakaomap_basic.png';
import tMapImage from '@/assets/images/t_map.svg';

const Map = () => {
  useEffect(() => {
    const initMap = () => {
      // document.getElementById("map") 를 가져와서 HTMLElement로 변환
      const mapContainer = document.getElementById('map') as HTMLElement | null;
      if (!mapContainer) {
        console.error('지도 컨테이너를 찾을 수 없습니다.');
        return;
      }

      const map = new window.naver.maps.Map(mapContainer, {
        center: new window.naver.maps.LatLng(37.5594054, 126.9817843),
        zoom: 16,
      });

      new window.naver.maps.Marker({
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

  const openWithNaverMap = () => {
    window.location.href =
      'https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EC%9D%80%ED%96%89%20%EB%B3%B8%EC%A0%90/place/12127345?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp';
  };

  const openWithKakaoMap = () => {
    window.location.href = 'https://kko.kakao.com/-kLAUEESlX';
  };

  const openWithTMap = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = 'https://tmap.life/0626e24c';
    } else {
      alert('모바일에서 확인 가능합니다');
    }
  };

  return (
    <div className="mb-4">
      <div id="map" style={mapStyle}></div>
      <div className="flex px-2 py-1 bg-gray-50">
        <MapButton onClick={openWithNaverMap} icon={naverMapImage}>
          네이버 지도
        </MapButton>
        <MapButton onClick={openWithKakaoMap} icon={kakaoMapImage}>
          카카오 맵
        </MapButton>
        <MapButton onClick={openWithTMap} icon={tMapImage}>
          티맵
        </MapButton>
      </div>
    </div>
  );
};

export default Map;
