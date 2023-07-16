import React, {useState, useEffect} from "react";
import Card from './Card'
import api from '../utils/api'

export default function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
    .then(([userData, cardData]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      // const myId = userData._id;
      setCards(cardData);
    })
    .catch(err => console.error(err));
  },[]);

  return (
    <main className="content">
      <section className="profile">
        <button type="button" className="profile__avatar-overlay" onClick = {props.onEditAvatar} >
          <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
        </button>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-btn" onClick={props.onEditProfile} />
          </div>
          <p className="profile__desc">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-btn" onClick = {props.onAddPlace} />
      </section>
      <section className="elements">
        <ul className="elements__container">
          {cards.map(data => {
            return (
              <li className="element" key={data._id}>
                <Card card = {data} onCardClick={props.onCardClick} />  
              </li>
            )
          }
          )}
        </ul>
      </section>
    </main>
  );
}