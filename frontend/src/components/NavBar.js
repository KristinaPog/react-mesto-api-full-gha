import React from 'react';
import { NavLink, useNavigate, useLocation} from 'react-router-dom';

function NavBar({userEmail}) {
  const navigate = useNavigate();
  const location = useLocation();

  function signOut () {
    localStorage.removeItem('jwt');
    navigate ('/signin');
  }

  return (
    <nav className="menu">
      {location.pathname !== "/signin" && location.pathname !== "/" && <NavLink to="/signin" className="menu__item">Войти</NavLink>}
      {location.pathname !== "/signup" && location.pathname !== "/" && <NavLink to="/signup" className="menu__item">Регистрация</NavLink>}
      {location.pathname === "/" && <p>{userEmail}</p>}
      {location.pathname !== "/signin" && location.pathname !== "/signup" && <button onClick={signOut} className="menu__item menu__button">Выйти</button>}
    </nav>
  );
}

export default NavBar;