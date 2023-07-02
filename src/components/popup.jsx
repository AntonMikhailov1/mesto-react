import React from "react";

function PopupWithForm(props) {
  <>
    {/* PROFILE POPUP  */}
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-btn" />
        <h2 className="popup__title">Редактировать профиль</h2>
        <form
          action="submit"
          className="popup__form"
          method="post"
          noValidate=""
        >
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
        </form>
      </div>
    </div>

    {/* CARD POPUP  */}
    <div className="popup popup_type_elements">
      <div className="popup__container">
        <button type="button" className="popup__close-btn" />
        <h2 className="popup__title">Новое место</h2>
        <form
          action="submit"
          className="popup__form"
          method="post"
          noValidate=""
        >
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
        </form>
      </div>
    </div>

    {/* AVATAR POPUP  */}
    <div className="popup popup_type_avatar">
      <div className="popup__avatar-container">
        <button type="button" className="popup__close-btn" />
        <h2 className="popup__title">Обновить аватар</h2>
        <form
          action="submit"
          className="popup__form"
          method="post"
          noValidate=""
        >
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
        </form>
      </div>
    </div>

    {/* CONFIRMATION POPUP  */}
    <div className="popup popup_type_confirmation">
      <div className="popup__confirm-container">
        <button type="button" className="popup__close-btn" />
        <h2 className="popup__title">Вы уверены?</h2>
        <form
          action="submit"
          className="popup__form"
          method="post"
          noValidate=""
        >
          <button className="popup__submit-btn" type="submit">
            Да
          </button>
        </form>
      </div>
    </div>
  </>;
}

export default PopupWithForm;