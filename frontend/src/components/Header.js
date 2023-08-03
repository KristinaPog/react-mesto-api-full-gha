import logo from '../images/logo.svg';
import NavBar from './NavBar';

function Header ({userEmail}) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место" className="logo" />
      <NavBar userEmail={userEmail}/>
    </header>
  )
}

export default Header;