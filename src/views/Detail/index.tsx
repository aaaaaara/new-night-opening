import { IHospitals } from '@/src/types';
import { useHospitalTypeStore } from '@/stores/hospitalType';
import HospitalAPI from '@apis/hospitals';
import { useHeaderTitleStore } from '@stores/headerTitle';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo';
import BasicInfo from './components/BasicInfo/BasicInfo';
import MapArea from './components/Map/MapArea';
import * as Styles from './index.styles';

function DetailView() {
  //State
  const { id } = useParams();
  const { hospitalTypeName } = useHospitalTypeStore();

  const [hospitalDetail, setHospitalDetail] = useState<
    IHospitals | undefined
  >();

  const { setTitle } = useHeaderTitleStore();
  //API

  //Logic
  //병원 상세 정보 가져오기
  const getHospitalDetailQuery = useQuery({
    queryKey: ['getHospitalDetailQuery'],
    queryFn: () => HospitalAPI.getHospitalDetail(id as string),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  //Effect

  useEffect(() => {
    getHospitalDetailQuery.refetch();
    if (getHospitalDetailQuery.isSuccess) {
      setHospitalDetail(getHospitalDetailQuery.data);
      setTitle(getHospitalDetailQuery.data.name);
    }
  }, [getHospitalDetailQuery.data]);

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.ContentItem>
          {hospitalDetail && (
            <BasicInfo
              key={hospitalDetail.id}
              type={hospitalTypeName}
              name={hospitalDetail.name}
              address={hospitalDetail.address}
            />
          )}
        </Styles.ContentItem>
        <Styles.ContentItem>
          {hospitalDetail && (
            <MapArea lat={hospitalDetail.y} lng={hospitalDetail.x} />
          )}
        </Styles.ContentItem>
        <Styles.ContentItem>
          {hospitalDetail && (
            <AdditionalInfo
              key={hospitalDetail.id}
              tel={hospitalDetail.tel}
              endTime={hospitalDetail.endTime}
              dutyDates={hospitalDetail.dutyDate}
            />
          )}
        </Styles.ContentItem>
      </Styles.Content>
    </Styles.Container>
  );
}

export default DetailView;
