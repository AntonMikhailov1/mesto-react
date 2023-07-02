import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_image-container">
      <figure className="popup__image-container">
        <button type="button" className="popup__close-btn" />
        <img className="popup__image" src="#" alt="" />
        <figcaption className="popup__image-caption" />
      </figure>
    </div>
  );
}

export default ImagePopup;
