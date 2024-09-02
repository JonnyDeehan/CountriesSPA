import React from "react";
import { SearchType } from "../../enums/SearchTypes";

export interface ISearchBarProps {
  setSearch: (search: string) => void;
  searchType: SearchType
}

export const SearchBar: React.FC<ISearchBarProps> = (props: ISearchBarProps) => {

  const getPlaceholderText = () => {
    if (props.searchType === SearchType.CountryName) {
      return "Enter Country Name";
    }
    if (props.searchType === SearchType.Currency) {
      return "Enter Currency";
    }
    if (props.searchType === SearchType.Language) {
      return "Enter Language";
    }
  }


  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearch(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder={getPlaceholderText()} onChange={onTextChange}/>
    </div>
  )

}
