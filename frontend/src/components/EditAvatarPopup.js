import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleAvatar() {
    const avatar = avatarRef.current.value;
    return avatar;
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return (
    <PopupWithForm
      name='edit-avatar'
      title='Обновить аватар'
      textButton='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        type="url"
        name="avatar"
        defaultValue=""
        placeholder="Вставьте ссылку на новый аватар"
        className="popup__input popup__input_type_avatar-link"
        id="avatar"
        ref={avatarRef}
        required 
        minLength="2"
        maxLength="200" 
        onChange={handleAvatar}/>
      <span className="popup__input-error avatar-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;