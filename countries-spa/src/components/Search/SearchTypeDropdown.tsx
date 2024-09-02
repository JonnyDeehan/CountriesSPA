import React from "react";
import { SearchType } from "../../enums/SearchTypes";

export interface ISearchDropdown {
    setSearchType: (type: SearchType) => void
}

export const SearchTypeDropdown: React.FC<ISearchDropdown> = (props: ISearchDropdown) => {
    const onOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.setSearchType(e.target.value as SearchType)
    }

    return (
        <div>
            <select onChange={onOptionChange}>
                <option>{SearchType.CountryName}</option>
                <option>{SearchType.Language}</option>
                <option>{SearchType.Currency}</option>
            </select>
        </div>
    )
}