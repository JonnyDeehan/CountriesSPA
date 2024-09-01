/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { restCountriesService } from '../services/RestCountriesService'

const NameQueryKey = 'getCountriesByName'
const LanguageQueryKey = 'getCountriesByLanguage'
const CurrencyQueryKey = 'getCountriesByCurrency'

export const useGetCountriesByName = (name: string): UseQueryResult<any> => {
    return useQuery<any>({
        queryKey: [NameQueryKey, name],
        queryFn: () => restCountriesService.getCountriesByName(name),
    });
  };

export const useGetCountriesByLanguage = (language: string): UseQueryResult<any> => {
    return useQuery<any>({
        queryKey: [LanguageQueryKey, language],
        queryFn: () => restCountriesService.getCountriesByLanguage(language),
    })
}

export const useGetCountriesByCurrency = (currency: string): UseQueryResult<any> => {
    return useQuery<any>({
        queryKey: [CurrencyQueryKey, currency],
        queryFn: () => restCountriesService.getCountriesByCurrency(currency),
    })
}