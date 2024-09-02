import React from "react";

export interface ISearchBarProps {
  setSearch: (search: string) => void;
}

export const SearchBar: React.FC<ISearchBarProps> = (props: ISearchBarProps) => {

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearch(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Search Country" onChange={onTextChange}/>
    </div>
  )

}
