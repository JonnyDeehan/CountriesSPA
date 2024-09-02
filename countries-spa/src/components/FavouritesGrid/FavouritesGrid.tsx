import React from 'react';
import { CountriesGrid } from '../CountriesGrid/CountriesGrid';
import { StyledFavourites } from './Favourites.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleFavourite } from '../../store/favouritesSlice';

export const FavouritesGrid: React.FC = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state: RootState) => state.favourites.favourites);

  const handleFavouriteToggle = (country: any) => {
    dispatch(toggleFavourite(country));
  };

  return (
    <StyledFavourites>
      <h1>Favourite Countries</h1>
      <CountriesGrid 
        rowData={favourites} 
        onFavouriteToggle={handleFavouriteToggle} 
        favourites={favourites} 
      />
    </StyledFavourites>
  );
};
