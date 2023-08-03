import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup ({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleCangeName(e) {
    setName(e.target.value);
  }

  function handleCangeAbout(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit (evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
            name='edit-profile'
            title='Редактировать профиль'
            textButton='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              id="name-input"
              value={name || ''}
              onChange={handleCangeName}
              placeholder="Введите имя"
              className="popup__input popup__input_type_name"
              required 
              minLength="2"
              maxLength="40" />
            <span className="popup__input-error name-input-error"></span>
            <input
              type="text"
              name="about"
              id="name-status"
              value = {description || ''}
              onChange={handleCangeAbout}
              placeholder="Введите статус"
              className="popup__input popup__input_type_status"
              required minLength="2"
              maxLength="200" />
            <span className="popup__input-error name-status-error"></span>
          </PopupWithForm>
  )
}

export default EditProfilePopup;