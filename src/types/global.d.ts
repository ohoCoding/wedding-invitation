export {};

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Link: {
        sendDefault: (params: {
          objectType: string;
          content: {
            title: string;
            description: string;
            imageUrl: string;
            link: { mobileWebUrl: string; webUrl: string };
          };
          buttons: {
            title: string;
            link: { mobileWebUrl: string; webUrl: string };
          }[];
        }) => void;
      };
    };
    naver: {
      maps: {
        Map: new (
          mapContainer: HTMLElement,
          options: { center: { lat: number; lng: number }; zoom: number }
        ) => naver.maps.Map;
        Marker: new (options: {
          position: { lat: number; lng: number };
          map: naver.maps.Map;
        }) => naver.maps.Marker;
        LatLng: new (lat: number, lng: number) => naver.maps.LatLng; // 추가
      };
    };
  }
}
