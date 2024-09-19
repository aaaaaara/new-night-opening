import { faArrowDownWideShort, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Label from "../../../../components/Label/Label";
import * as Styles from "./Filter.styles";

function Filter() {
    const [isActive, setIsActive] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    //검색하기
    /*
    1. 버튼을 클릭하면 검색창영역이 활성화
    
  */
    const onClickSearchButton = () => {
        setIsActive(true);
        setIsSearchOpen(true);
        setIsSortOpen(false);
    };

    //정렬
    const onClickSortButton = () => {
        setIsActive(true);
        setIsSortOpen(true);
        setIsSearchOpen(false);
    };

    const onCloseFilter = () => {
        setIsActive(false);
        setIsSortOpen(false);
        setIsSearchOpen(false);
    };

    return (
        <Styles.Container $isActive={isActive}>
            <Styles.FilterContainer $isActive={isActive}>
                {isActive && <p onClick={onCloseFilter}>닫기</p>}
                <Styles.Filter>
                    <Styles.FilterTop>
                        {isSearchOpen && (
                            <Styles.SearchBox $isSearchOpen={isSearchOpen}>
                                <input type="search" placeholder="무엇을 찾고 싶으세요?" />
                            </Styles.SearchBox>
                        )}

                        {isSortOpen && (
                            <Styles.SortBox>
                                <Label children="진료중" variant="active" />

                                <Label children="곧마감" variant="disabled" />

                                <Label children="마감" variant="disabled" />
                            </Styles.SortBox>
                        )}
                    </Styles.FilterTop>
                    <Styles.FilterBottom>
                        <button onClick={onClickSearchButton}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            검색하기
                        </button>
                        <button onClick={onClickSortButton}>
                            <FontAwesomeIcon icon={faArrowDownWideShort} />
                            정렬
                        </button>
                    </Styles.FilterBottom>
                </Styles.Filter>
            </Styles.FilterContainer>
        </Styles.Container>
    );
}

export default Filter;
