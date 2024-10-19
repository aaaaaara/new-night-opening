import { useEffect, useRef, useState } from 'react';
import * as Styles from './MapArea.styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { kakao }: any = window;

interface Props {
  Lat: number;
  Lng: number;
}

function MapArea({ Lat, Lng }: Props) {
  const [kakaoMap, setKakaoMap] = useState(null);
  const container = useRef(null);

  const initMap = () => {
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(Lat, Lng), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container.current, options);
    setKakaoMap(map);
  };

  useEffect(() => {
    initMap();
  }, []);

  return <Styles.Container ref={container}>지도영역</Styles.Container>;
}

export default MapArea;
