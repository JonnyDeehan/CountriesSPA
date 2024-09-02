import axios from 'axios';

export const restCountriesApi = axios.create({
   baseURL: 'https://restcountries.com/v3.1',
   headers: {
      'Content-Type': 'application/json',
   },
});

restCountriesApi.interceptors.response.use(
   (response) => {
      return response;
   },
   (error) => {
      if (error.response && error.response.status === 404) {
         console.warn('Resource not found (404). Returning an empty array.');
         return Promise.resolve({ data: [] }); // Return an empty array for 404 errors
      }

      return Promise.reject(error);
   }
);
