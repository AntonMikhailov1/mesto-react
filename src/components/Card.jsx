import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = currentUser._id === props.card.owner._id;
  const isLiked = props.card.likes.some((like) => like._id === currentUser._id);
  const cardLikeButtonClassName = `element__like-btn ${
    isLiked && "element__like-btn_active"
  }`;

  return (
    <>
      {isOwn && (
        <button
          type="button"
          className="element__delete-btn"
          onClick={() => props.onCardDelete(props.card)}
        />
      )}
      <img
        className="element__image"
        alt={props.card.name}
        src={props.card.link}
        onClick={() => props.onCardClick(props.card)}
      />
      <div className="element__group">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like">
          <button type="button" className={cardLikeButtonClassName} onClick={() => props.onCardLike(props.card)} />
          <span className="element__like-counter">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </>
  );
}
