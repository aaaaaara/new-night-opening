import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ListView() {
  const { hospitalTypeId } = useParams();

  useEffect(() => {
    console.log(hospitalTypeId, 'id가 무엇인가요');
  }, [hospitalTypeId]);
  return <div>id: {hospitalTypeId}</div>;
}

export default ListView;
