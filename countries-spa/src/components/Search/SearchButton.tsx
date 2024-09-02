import React from "react";

interface ISearchButtonProps {
    handleClick: () => void;
}

export const SearchButton: React.FC<ISearchButtonProps> = ({ handleClick }) => {
    return <button
        style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}
        onClick={handleClick}
    >
        Search
    </button>;
}
