import React from "react";

function InfoToolTip ({isOpen, onClose, infoText, infoImage}) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
        <div className="popup__container popup__info-tooltip">
          <img className="popup__image popup__image_info-tooltip" src={infoImage}  />
          <p className="popup__title popup__title_info-tooltip">{infoText}</p>
          <button className="popup__close" type="button" aria-label="Закрыть" onClick={onClose}></button>
        </div>
      </div>
  )
}

export default InfoToolTip;