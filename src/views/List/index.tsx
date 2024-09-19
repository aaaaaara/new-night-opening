import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HospitalAPI from "../../apis/hospitals";
import ItemList from "./components/ItemList/ItemList";
import * as Styles from "./index.styles";
import Filter from "./components/Filter/Filter";

function ListView() {
    const [searchParams] = useSearchParams();
    const hospitalType = searchParams.get("hospitalType");

    //api

    const getHospitalsQuery = useQuery({
        queryKey: ["getHospitalsQuery"],
        queryFn: () => HospitalAPI.getHospitals(hospitalType as string),
        enabled: !!hospitalType,
    });

    useEffect(() => {
        console.log(getHospitalsQuery.data);
    }, [hospitalType, getHospitalsQuery.data]);

    return (
        <Styles.Container>
            <Styles.Content>
                <Filter />
                {getHospitalsQuery.isSuccess && <ItemList data={getHospitalsQuery.data} />}
            </Styles.Content>
        </Styles.Container>
    );
}

export default ListView;
