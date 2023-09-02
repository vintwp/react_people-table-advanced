import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const isActiveLink = (
  { isActive }: { isActive: boolean },
) => {
  return cn(
    'navbar-item',
    { 'has-background-grey-lighter': isActive },
  );
};

export const Navbar: React.FC = () => {
  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={isActiveLink}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={isActiveLink}
            to="people"
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};