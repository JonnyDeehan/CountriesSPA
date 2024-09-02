import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Country {
    name: { common: string };
    [key: string]: any; 
}

interface FavouritesState {
    favourites: Country[];
}

const initialState: FavouritesState = {
    favourites: [],
};

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        loadFavourites: (state, action: PayloadAction<Country[]>) => {
            state.favourites = action.payload;
        },
        toggleFavourite: (state, action: PayloadAction<Country>) => {
            const isFavourite = state.favourites.some(fav => fav.name.common === action.payload.name.common);
            if (isFavourite) {
                state.favourites = state.favourites.filter(fav => fav.name.common !== action.payload.name.common);
            } else {
                state.favourites.push(action.payload);
            }
            localStorage.setItem('favourites', JSON.stringify(state.favourites));
        },
    },
});

export const { loadFavourites, toggleFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
