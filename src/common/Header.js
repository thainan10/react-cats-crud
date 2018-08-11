import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <nav>
      <Link to="/" activeClassName="active">
        Home
      </Link>
      {" | "}
      <Link to="/cats" activeClassName="active">Cats</Link>
    </nav>
  );
};

export default Header;
