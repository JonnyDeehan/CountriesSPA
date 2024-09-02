import React, { useEffect, useState } from "react";
import { CountriesGrid } from "../CountriesGrid/CountriesGrid";
import { useGetCountries } from "../../hooks/countries";
import { SearchTypeDropdown } from "../Search/SearchTypeDropdown";
import { SearchBar } from "../Search/SearchBar";
import { SearchType } from "../../enums/SearchTypes";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { StyledCountriesSearchContainer } from "./CountriesSearchContainer.styles";
import { SearchButton } from "../Search/SearchButton";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { loadFavourites, toggleFavourite } from '../../store/favouritesSlice';

export const CountriesSearchContainer: React.FC = () => {
    const [searchQuery, setSearch] = useState("");
    const [searchType, setSearchType] = useState(SearchType.CountryName);
    const [rowData, setRowData] = useState<any[] | undefined>([]);

    const dispatch = useDispatch();
    const favourites = useSelector((state: RootState) => state.favourites.favourites);

    const { mutateAsync: getCountries } = useGetCountries();

    useEffect(() => {
        const savedFavourites = localStorage.getItem('favourites');
        if (savedFavourites) {
            dispatch(loadFavourites(JSON.parse(savedFavourites)));
        }
    }, [dispatch]);

    const mergeFavourites = (data: any[]) => {
        return data.map(country => {
            const isFavourite = favourites.some(fav => fav.name.common === country.name.common);
            return { ...country, isFavourite };
        });
    };

    const handleSearch = async () => {
        const result = await getCountries({ searchQuery, searchType });

        if (result && result.length === 0) {
            toast.info('No results found.');
        }

        const mergedData = mergeFavourites(result || []);
        setRowData(mergedData);
    };

    const handleFavouriteToggle = (country: any) => {
        dispatch(toggleFavourite(country));
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
                onFavouriteToggle={handleFavouriteToggle} 
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
