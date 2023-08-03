import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth';
import check from '../images/check.png';
import uncheck from '../images/uncheck.png';
import InfoToolTip from './InfoTooltip';

function Register() {
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const [successReg, setSuccesReg] = React.useState(false);
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: ''
  })

  function closePopup() {
    setIsOpenPopup(false);
    if (successReg) { navigate('/signin', { replace: true }); }
  }

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue;
    auth.register(email, password).then(() => {
      setSuccesReg(true);
      setIsOpenPopup(true);
    })

      .catch(err => {
        setSuccesReg(false);
        setIsOpenPopup(true);
        console.log(err)
      })
  }

  return (
    <section className="sign">
      <h1 className="sign__title">Регистрация</h1>
      <form onSubmit={handleSubmit} className="sign__form">
        <input id="email" name="email" type="email" value={formValue.email} onChange={handleChange} className="sign__input" placeholder="Email"></input>
        <input id="password" name="password" type="password" value={formValue.password} onChange={handleChange} className="sign__input" placeholder="Пароль"></input>
        <button className="sign__button">Зарегистироваться</button>
      </form>
      <div className="sign__text">
        <p>Уже зарегистрированы?
          <Link to="/signin" className='sign__link'>Войти</Link>
        </p>
      </div>

      <InfoToolTip
        isOpen={isOpenPopup}
        onClose={closePopup}
        infoText={`${successReg ? 'Вы успешно зарегистрированы' : 'Что-то пошло не так! Попробуйте ещё раз.'}`}
        infoImage={`${successReg ? check : uncheck}`}
      />
    </section>


  )
}

export default Register;