/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { CountriesGrid } from "../CountriesGrid/CountriesGrid";
import { useGetCountries } from "../../hooks/countries";
import { SearchTypeDropdown } from "../Search/SearchTypeDropdown";
import { SearchBar } from "../Search/SearchBar";
import { SearchType } from "../../enums/SearchTypes";

export const CountriesSearchContainer: React.FC = () => {
    const [searchQuery, setSearch] = useState("");
    const [searchType, setSearchType] = useState(SearchType.CountryName);
    const [rowData, setRowData] = useState<any[] | undefined>([]);

    const { mutateAsync: getCountries } = useGetCountries();
    
    const handleClick = async () => {
        const result = await getCountries({ searchQuery, searchType });
        setRowData(result);
    };

    return (
        <div>
            <h1>Countries SPA</h1>
            <SearchTypeDropdown setSearchType={setSearchType} />
            <SearchBar setSearch={setSearch} />
            <button
                style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}
                onClick={handleClick}
            >
                Search
            </button>
            {rowData && <CountriesGrid rowData={rowData} />}
        </div>
    );
};
