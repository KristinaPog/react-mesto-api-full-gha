import React from "react";
import Card from './Card.js';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onLikeClick, onDeleteClick }) {
  const  user = React.useContext(CurrentUserContext);
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={() => { onEditAvatar(true) }}>
          <img src={user.avatar} alt="Аватар" className="profile__avatar" />
          <div className="profile__avatar-overlay"></div>
        </div>
        <div className="profile-info">
          <h1 className="profile-info__name">{user.name}</h1>
          <button className="profile-info__button" id="button" aria-label="Редактировать" onClick={() => { onEditProfile(true) }}> </button>
          <p className="profile-info__status">{user.about}</p>
        </div>
        <button className="profile__button" type="button" aria-label="Добавить изображение" onClick={() => { onAddPlace(true) }}> </button>
      </section>
      <section className="places">
        <ul className="places__list">
          {
          cards.map((card)=>(<Card key={card._id} card={card} onCardClick={onCardClick} onLikeClick={onLikeClick} onDeleteClick={onDeleteClick} />))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;