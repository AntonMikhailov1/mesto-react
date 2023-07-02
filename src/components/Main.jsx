import React from "react";

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <button type="button" className="profile__avatar-overlay">
          <img className="profile__avatar" src="#" alt="Аватар профиля" />
        </button>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name" />
            <button type="button" className="profile__edit-btn" />
          </div>
          <p className="profile__desc" />
        </div>
        <button type="button" className="profile__add-btn" />
      </section>
      <section className="elements">
        <ul className="elements__container" />
      </section>
    </main>
  );
}

export default Main;
