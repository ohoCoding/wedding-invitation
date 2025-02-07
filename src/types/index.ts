export interface loveMessageType {
  id: number;
  value: string;
}

export interface ContactInfoType {
  role: string;
  name: string;
  phone: string;
  sms: string;
  isBride?: boolean;
}

export interface OpenWithMap {
  openWithNaverMap: () => void;
  openWithKakaoMap: () => void;
  openWithTMap: () => void;
}

export interface GalleryType {
  id: number;
  src: string;
  alt: string;
}

export interface GuideType {
  value: string;
  label: string;
  content: string;
}
