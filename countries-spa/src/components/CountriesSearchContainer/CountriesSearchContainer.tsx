/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { CountriesGrid } from "../CountriesGrid/CountriesGrid";
import { useGetCountries } from "../../hooks/countries";
import { SearchTypeDropdown } from "../Search/SearchTypeDropdown";
import { SearchBar } from "../Search/SearchBar";
import { SearchType } from "../../enums/SearchTypes";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { StyledCountriesSearchContainer } from "./CountriesSearchContainer.styles";

export const CountriesSearchContainer: React.FC = () => {
    const [searchQuery, setSearch] = useState("");
    const [searchType, setSearchType] = useState(SearchType.CountryName);
    const [rowData, setRowData] = useState<any[] | undefined>([]);

    const { mutateAsync: getCountries } = useGetCountries();
    
    const handleClick = async () => {
        const result = await getCountries({ searchQuery, searchType });
         
        if (result && result.length === 0) {
            toast.info('No results found.');
        }

        setRowData(result);
    };

    return (
        <StyledCountriesSearchContainer>
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
        </StyledCountriesSearchContainer>
    );
};

toast.info('No results found.', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  
