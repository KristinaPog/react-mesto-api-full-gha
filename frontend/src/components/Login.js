import React from 'react';
import { useNavigate } from 'react-router-dom';
import uncheck from '../images/uncheck.png'
import * as auth from '../utils/auth.js';
import InfoToolTip from './InfoTooltip';


function Login({ handleLogin, userEmail}) {
  const navigate = useNavigate();
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const [successLog, setSuccesLog] = React.useState(false);
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: ''
  })
  
  function closePopup() {
    setIsOpenPopup(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.authorize(formValue.email, formValue.password)
      .then((data) => {
        handleLogin();
        setSuccesLog(true);
        userEmail(formValue.email);
        navigate('/', { replace: true });
        localStorage.setItem('jwt', data.token);
      })
      .catch(err => {
        setSuccesLog(false);
        setIsOpenPopup(true);
        console.log(err);
      });
  }

  return (
    <section className="sign">
      <h1 className="sign__title">Вход</h1>
      <form onSubmit={handleSubmit} className="sign__form">
        <input id="email" name="email" type="email" value={formValue.email} onChange={handleChange} className="sign__input" placeholder="Email"></input>
        <input id="password" name="password" type="password" value={formValue.password} onChange={handleChange} className="sign__input" placeholder="Пароль"></input>
        <button className="sign__button">Войти</button>
      </form>
      <InfoToolTip
        isOpen={isOpenPopup}
        onClose={closePopup}
        infoText={`${!successLog && 'Что-то пошло не так! Попробуйте ещё раз.'}`}
        infoImage={uncheck}
      />
    </section>
  )
}

export default Login;