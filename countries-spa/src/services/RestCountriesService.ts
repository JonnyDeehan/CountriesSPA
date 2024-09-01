/* eslint-disable @typescript-eslint/no-explicit-any */
import { restCountriesApi } from "./api";

class RestCountriesService {
    public getCountriesByName(name: string): Promise<any> {
        return restCountriesApi.post<any>(`/name/${name}`);
    }

    public getCountriesByLanguage(language: string): Promise<any> {
        return restCountriesApi.get<any>(`/lang/${language}`);
    }

    public getCountriesByCurrency(currency: string): Promise<any> {
        return restCountriesApi.get<any>(`/currency/${currency}`);
    }
}

export const restCountriesService = new RestCountriesService();
