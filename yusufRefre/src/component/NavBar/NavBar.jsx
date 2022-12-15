import React from 'react';
import { Nav } from '../../constants/info';

function NavBar() {
  return (
    <div className="container">
      <nav>
        <ul>
          {
          Nav.map((navbar) => <li key={navbar.id}>{navbar.title}</li>)
           }
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
