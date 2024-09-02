import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSidebar } from './Sidebar.styles';

export const Sidebar: React.FC = () => {
  return (
    <StyledSidebar>
      <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Search Countries</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </div>
    </StyledSidebar>

  );
};
