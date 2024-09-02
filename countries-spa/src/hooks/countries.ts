/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { restCountriesService } from '../services/RestCountriesService'
import { ICountriesRequest } from '../models/CountriesRequest'
import { SearchType } from '../enums/SearchTypes'

export const useGetCountries = (): UseMutationResult<any[] | undefined, unknown, ICountriesRequest, unknown> => {
    return useMutation({
        mutationFn: async (searchRequest: ICountriesRequest) => { 
            const countriesResponse = await fetchCountries(searchRequest) 
            return countriesResponse
        },
    })
  }

const fetchCountries = async (searchRequest: ICountriesRequest) => {
    if(searchRequest.searchType === SearchType.Language){
        return restCountriesService.getCountriesByLanguage(searchRequest.searchQuery)
    }
    if(searchRequest.searchType === SearchType.Currency){
        return restCountriesService.getCountriesByCurrency(searchRequest.searchQuery)
    }
    else {
        return  restCountriesService.getCountriesByName(searchRequest.searchQuery)
    }
}
