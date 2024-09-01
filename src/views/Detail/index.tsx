import { useEffect, useState } from 'react';
import { IHospitalInfo } from '../../types';
import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo';
import BasicInfo from './components/BasicInfo/BasicInfo';
import MapArea from './components/Map/MapArea';
import * as Styles from './index.styles';
const testHospitalInfo = {
  hospitalInfo: {
    id: 'h001',
    type: { name: '이비인후과', id: '1' },
    name: '이룸이비인후과의원',
    x: 128,
    y: 128,
  },
  dutyDates: [{ day: '월', time: '10:00 ~18:00' }],
  address: '서울시 마포구',
  tel: '02-0000-0000',
};

function DetailView() {
  const [hospitalInfoData, setHospitalInfo] = useState<IHospitalInfo>();

  //병원 상세 정보 가져오기
  const getHospitalInfoData = () => {
    setHospitalInfo(testHospitalInfo);
  };

  useEffect(() => {
    getHospitalInfoData();
  }, []);
  return (
    <Styles.Container>
      <Styles.Content>
        {hospitalInfoData && (
          <BasicInfo
            key={hospitalInfoData.hospitalInfo.type.id}
            type={hospitalInfoData?.hospitalInfo.type}
            name={hospitalInfoData?.hospitalInfo.name}
            address={hospitalInfoData?.address}
          />
        )}

        <MapArea />
        {hospitalInfoData && (
          <AdditionalInfo
            key={hospitalInfoData.hospitalInfo.id}
            tel={hospitalInfoData?.tel}
            dutyDates={hospitalInfoData.dutyDates}
          />
        )}
      </Styles.Content>
    </Styles.Container>
  );
}

export default DetailView;
