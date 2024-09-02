import React, { useState, useEffect } from 'react';
import { CountriesGrid } from '../CountriesGrid/CountriesGrid';
import { StyledFavourites } from './Favourites.styles';

export const FavouritesGrid: React.FC = () => {
  const [favourites, setFavourites] = useState<any[]>([]);

  useEffect(() => {
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      setFavourites(JSON.parse(savedFavourites));
    }
  }, []);

  const handleFavouriteToggle = (country: any) => {
    const isFavourite = favourites.some(fav => fav.name.common === country.name.common);
let updatedFavourites;
    if (isFavourite) {
      updatedFavourites = favourites.filter(fav => fav.name.common !== country.name.common);
    } else {
      updatedFavourites = [...favourites, country];
    }
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
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
