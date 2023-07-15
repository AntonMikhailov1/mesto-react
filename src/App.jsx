import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, seIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
 
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    seIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  } 

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false);
    seIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page__container">

      <Header />

      <Main
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        submitText="Сохранить"
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopup}
        children={
          <>
            <input
              className="popup__field popup__field_input_name"
              type="text"
              name="name"
              defaultValue="Жак-Ив Кусто"
              required=""
              minLength={2}
              maxLength={40}
            />
            <span className="name-error popup__field-error" />
            <input
              className="popup__field popup__field_input_about"
              type="text"
              name="about"
              defaultValue="Исследователь океана"
              required=""
              minLength={2}
              maxLength={200}
            />
            <span className="about-error popup__field-error" />
            <button className="popup__submit-btn" type="submit">
              Сохранить
            </button>
          </>
        }
      />

      <PopupWithForm
        name="elements"
        title="Новое место"
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopup}
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
            />
            <span className="name-error popup__field-error" />
            <input
              className="popup__field popup__field_input_link"
              type="url"
              name="link"
              defaultValue=""
              placeholder="Ссылка на картинку"
              required=""
            />
            <span className="link-error popup__field-error" />
            <button className="popup__submit-btn" type="submit">
              Сохранить
            </button>
          </>
        }
      />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopup}
        children={
          <>
            <input
              className="popup__field popup__field_input_link"
              type="url"
              name="avatar"
              defaultValue=""
              placeholder="Ссылка на картинку"
              required=""
            />
            <span className="avatar-error popup__field-error" />
            <button className="popup__submit-btn" type="submit">
              Сохранить
            </button>
          </>
        }
      />

      <PopupWithForm
        name="confirmation"
        title="Вы уверены?"
        onClose={closeAllPopup}
        children={
          <button className="popup__submit-btn" type="submit">
            Да
          </button>
        }
      />

      <ImagePopup selectedCard={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopup}/>

    </div>
  );
}
