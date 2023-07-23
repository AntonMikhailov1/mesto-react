import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value
    });

    nameRef.current.value = "";
    linkRef.current.value = "";
  }

  return (
    <PopupWithForm
      name="elements"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            className="popup__field popup__field_input_name"
            type="text"
            name="name"
            defaultValue=""
            placeholder="Название"
            required=""
            minLength={2}
            maxLength={30}
            ref={nameRef}
          />
          <span className="name-error popup__field-error" />
          <input
            className="popup__field popup__field_input_link"
            type="url"
            name="link"
            defaultValue=""
            placeholder="Ссылка на картинку"
            required=""
            ref={linkRef}
          />
          <span className="link-error popup__field-error" />
          <button className="popup__submit-btn" type="submit">
            Сохранить
          </button>
        </>
      }
    />
  );
}
