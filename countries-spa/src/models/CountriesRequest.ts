import { SearchType } from "../enums/SearchTypes"

export interface ICountriesRequest {
    searchQuery: string
    searchType: SearchType
}