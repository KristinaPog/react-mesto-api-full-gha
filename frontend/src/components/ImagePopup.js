import React from "react";

function ImagePopup ({card, onClose}) {

  return (
    <div className={`popup popup_open-image ${card.link && 'popup_opened'}`}>
        <div className="popup__container popup__container_open-image">
          <img src={card.link} alt={card.name} className="popup__image" />
          <p className="popup__text">{card.name}</p>
          <button className="popup__close popup__close_open-image" type="button" aria-label="Закрыть" onClick={onClose}></button>
        </div>
      </div>
  )
}

export default ImagePopup;