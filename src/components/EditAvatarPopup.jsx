import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    avatarRef.current.value = "";
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            className="popup__field popup__field_input_link"
            type="url"
            name="avatar"
            defaultValue=""
            placeholder="Ссылка на картинку"
            required=""
            ref={avatarRef}
          />
          <span className="avatar-error popup__field-error" />
          <button className="popup__submit-btn" type="submit">
            Сохранить
          </button>
        </>
      }
    />
  );
}
