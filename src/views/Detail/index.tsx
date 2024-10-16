import { useEffect, useState } from 'react';
import { IHospitalInfo } from '../../types';
import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo';
import BasicInfo from './components/BasicInfo/BasicInfo';
import MapArea from './components/Map/MapArea';
import * as Styles from './index.styles';
/*
  {
  "id": "string",
  "type": {
    "id": "string",
    "name": "string"
  },
  "name": "string",
  "x": 0,
  "y": 0,
  "address": "string",
  "isDuty": true,
  "dutyDate": [
    {
      "day": "string",
      "time": null
    }
  ]
}
*/
const testHospitalInfo = {
  hospitalInfo: {
    id: 'h001',
    type: { id: 'D001', name: '이비인후과' },
    name: '이룸이비인후과의원',
    x: 37.563617,
    y: 126.851353,
  },
  dutyDates: [
    { day: '월', time: '10:00 ~18:00' },
    { day: '화', time: '10:00 ~18:00' },
    { day: '수', time: '10:00 ~18:00' },
  ],
  address: '경기 남양주시 진접읍 해밀예당1로 30 센타플라자 6층 금곡리 1081-3',
  tel: '02-0000-0000',
};

function DetailView() {
  //State
  const [hospitalInfoData, setHospitalInfo] = useState<IHospitalInfo>();

  //API

  //Logic
  //병원 상세 정보 가져오기
  const getHospitalInfoData = () => {
    setHospitalInfo(testHospitalInfo);
  };

  //Effect
  useEffect(() => {
    getHospitalInfoData();
  }, []);
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.ContentItem>
          {hospitalInfoData && (
            <BasicInfo
              key={hospitalInfoData.hospitalInfo.type.id}
              type={hospitalInfoData?.hospitalInfo.type}
              name={hospitalInfoData?.hospitalInfo.name}
              address={hospitalInfoData?.address}
            />
          )}
        </Styles.ContentItem>
        <Styles.ContentItem>
          <MapArea />
        </Styles.ContentItem>
        <Styles.ContentItem>
          {hospitalInfoData && (
            <AdditionalInfo
              key={hospitalInfoData.hospitalInfo.id}
              tel={hospitalInfoData?.tel}
              dutyDates={hospitalInfoData.dutyDates}
            />
          )}
        </Styles.ContentItem>
      </Styles.Content>
    </Styles.Container>
  );
}

export default DetailView;
