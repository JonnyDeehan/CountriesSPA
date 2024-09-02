import React, { useState, useEffect } from "react";
import { CountriesGrid } from "../CountriesGrid/CountriesGrid";
import { useGetCountries } from "../../hooks/countries";
import { SearchTypeDropdown } from "../Search/SearchTypeDropdown";
import { SearchBar } from "../Search/SearchBar";
import { SearchType } from "../../enums/SearchTypes";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { StyledCountriesSearchContainer } from "./CountriesSearchContainer.styles";
import { SearchButton } from "../Search/SearchButton";

export const CountriesSearchContainer: React.FC = () => {
    const [searchQuery, setSearch] = useState("");
    const [searchType, setSearchType] = useState(SearchType.CountryName);
    const [rowData, setRowData] = useState<any[] | undefined>([]);
    const [favourites, setfavourites] = useState<any[]>([]);

    const { mutateAsync: getCountries } = useGetCountries();

    useEffect(() => {
        const savedfavourites = localStorage.getItem('favourites');
        if (savedfavourites) {
            setfavourites(JSON.parse(savedfavourites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

        const handleSearch = async () => {
        const result = await getCountries({ searchQuery, searchType });

        if (result && result.length === 0) {
            toast.info('No results found.');
        }

        setRowData(result);
    };

    const handlefavouriteToggle = (country: any) => {
        const isFavourite = favourites.some(fav => fav.name.common === country.name.common);
        let updatedfavourites;
        if (isFavourite) {
            updatedfavourites = favourites.filter(fav => fav.name.common !== country.name.common);
        } else {
            updatedfavourites = [...favourites, country];
        }
        setfavourites(updatedfavourites);
    };

    return (
    <StyledCountriesSearchContainer>
        <h1>REST Countries</h1>
        <div className="search-controls">
            <SearchTypeDropdown setSearchType={setSearchType} />
            <SearchBar setSearch={setSearch} searchType={searchType} />
            <SearchButton handleClick={handleSearch} />
        </div>
        {rowData && (
        <CountriesGrid 
            rowData={rowData} 
            onFavouriteToggle={handlefavouriteToggle} 
            favourites={favourites} 
        />
        )}
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

