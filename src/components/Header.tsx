import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className="tabs is-centered">
      <ul>
        <li>
          <NavLink to="/" className="navbar-item">
            Наш словник
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className="navbar-item">
            Додати слово
          </NavLink>
        </li>
        <li>
          <NavLink to="/check" className="navbar-item">
            Перевірити слова
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" className="navbar-item">
            Історія перевірок
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
