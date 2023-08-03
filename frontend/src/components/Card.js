import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onLikeClick, onDeleteClick }) {
  const handleCardClick = () => {
    onCardClick(card); 
  };
  

  const handleLikeClick =() => {
    onLikeClick (card);
  }

  const handleDeleteClick = () =>{
    onDeleteClick(card);
  }

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(item => item._id === currentUser._id);
  const cardLikeButtonClassName = (`like__icon ${isLiked && `like__icon_active`}`); 

  return (
    <li className="place">
      <img className="place__image" alt={card.name} src={card.link} onClick={handleCardClick}/>
      <div className="place__label">
        <h2 className="place__text">{card.name}</h2>
        <div className="like">
          
          <button type="button" className={cardLikeButtonClassName} aria-label="Поставить лайк" onClick={handleLikeClick}></button>
          <p className="like__quantity">{card.likes.length}</p>
        </div>
      </div>
      {isOwn && <button className='trash'  onClick={handleDeleteClick} />}
      
    </li>
  )
}

export default Card;