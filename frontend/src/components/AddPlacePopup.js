import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup ({isOpen, onClose, onAddPlace}) {
  const [cardName, setCardName] = React.useState('');
  const [cardImage, setCardImage] = React.useState('')

  function handleChangeCardName(e) {
    setCardName(e.target.value);
  }

  function handleChangeCardImage(e) {
    setCardImage(e.target.value);
  }

  React.useEffect(() => {
    setCardName('');
    setCardImage('');
  }, [isOpen]);

  function handleSubmit (evt) {
    evt.preventDefault();
    onAddPlace({
      name: cardName,
      link: cardImage,
    });
  }

  return (
    <PopupWithForm
            name='add-card'
            title='Новое место'
            textButton='Создать'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Название"
              className="popup__input popup__input_type_place-name"
              id="place-name"
              required minLength="2"
              maxLength="30"
              value={cardName}
              onChange={handleChangeCardName} />
            <span className="popup__input-error place-name-error"></span>
            <input
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_place-image"
              id="place-image"
              required minLength="2"
              value={cardImage}
              maxLength="200" 
              onChange={handleChangeCardImage} />
            <span className="popup__input-error place-image-error"></span>
          </PopupWithForm>
  )
}

export default AddPlacePopup;