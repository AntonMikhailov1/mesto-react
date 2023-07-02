import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-btn" />
        <h2 className="popup__title">{props.title}</h2>
        <form
          name={props.name}
          action="submit"
          className="popup__form"
          method="post"
          noValidate=""
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
