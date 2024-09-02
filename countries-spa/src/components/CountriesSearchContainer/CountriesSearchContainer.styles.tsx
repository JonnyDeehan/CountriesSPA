import { styled } from "styled-components";

export const StyledCountriesSearchContainer = styled.div`
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

   h1 {
    margin-bottom: 20px;
  }

  .search-controls {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    & > *:not(:last-child) {
      margin-right: 10px; 
    }
  }
`