import { useEffect, useState } from "react";
import { IHospitals } from "../../../../types";
import ItemCard from "../ItemCard/ItemCard";
import * as Styles from "./ItemList.styles";
import dayjs from "dayjs";
interface Props {
    data: IHospitals[];
}

function ItemList({ data }: Props) {
    const today = dayjs().day();
    const [todayDuty, setTodayDuty] = useState();

    const getTodayDutyTime = () => {
        //
    };
    useEffect(() => {
        console.log(dayjs().day(), data);
    }, []);
    return <Styles.Container>{data && data.map((hospitalData) => <ItemCard key={hospitalData.id} id={hospitalData.id} type={hospitalData.type.name} name={hospitalData.name} state={hospitalData?.state} />)}</Styles.Container>;
}

export default ItemList;
