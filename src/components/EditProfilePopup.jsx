import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      submitText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            className="popup__field popup__field_input_name"
            type="text"
            name="name"
            defaultValue={name}
            required=""
            minLength={2}
            maxLength={40}
            onChange={handleNameChange}
          />
          <span className="name-error popup__field-error" />
          <input
            className="popup__field popup__field_input_about"
            type="text"
            name="about"
            defaultValue={description}
            required=""
            minLength={2}
            maxLength={200}
            onChange={handleDescriptionChange}
          />
          <span className="about-error popup__field-error" />
          <button className="popup__submit-btn" type="submit">
            Сохранить
          </button>
        </>
      }
    />
  );
}
