import React from "react";

export default function Card({ card, onCardClick }) {
  return (
    <>      
      <button type="button" className="element__delete-btn" />
      <img
        className="element__image"
        alt={card.name}
        src={card.link}
        onClick={() => onCardClick(card)}
      />
      <div className="element__group">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
          <button type="button" className="element__like-btn"></button>
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </>
  );
}
