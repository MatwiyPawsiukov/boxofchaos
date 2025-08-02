import React from 'react';
import Header from './components/header';
import './App.css';
import './components/header.css';
import boxIcon from './images/box.png';

// Додамо компонент IconButton прямо тут (або імпортуй, якщо він окремо)
function IconButton({ onClick }) {
  return (
    <button className="icon-button" onClick={onClick}>
      <img src={boxIcon} alt="Icon" className="icon-image" />
    </button>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">Game content</section>

        <div className="button-container">
          <IconButton onClick={() => console.log("Icon button clicked")} />
        </div>

        <section id="game">Game Section Placeholder</section>
      </main>
    </>
  );
}

export default App;
