/* eslint-disable @typescript-eslint/no-explicit-any */
import { restCountriesApi } from "./api";
import { AxiosResponse } from "axios";

class RestCountriesService {
    private handleResponse(response: AxiosResponse<any[]>): any[] {
        return response.data;
    }

    public async getCountriesByName(name: string): Promise<any[]> {
        const response = await restCountriesApi.get<any[]>(`/name/${name}`);
        return this.handleResponse(response);
    }

    public async getCountriesByLanguage(language: string): Promise<any[]> {
        const response = await restCountriesApi.get<any[]>(`/lang/${language}`);
        return this.handleResponse(response);
    }

    public async getCountriesByCurrency(currency: string): Promise<any[]> {
        const response = await restCountriesApi.get<any[]>(`/currency/${currency}`);
        return this.handleResponse(response);
    }
}

export const restCountriesService = new RestCountriesService();
