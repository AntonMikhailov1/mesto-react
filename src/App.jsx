import React from "react";
import "./index.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name='profile' title='Редактировать профиль'/>
      <PopupWithForm name='elements' title='Новое место'/>
      <PopupWithForm name='avatar' title='Обновить аватар'/>
      <PopupWithForm name='confirmation' title='Вы уверены?'/>
      <ImagePopup />
      </div>
  );
}

export default App;
