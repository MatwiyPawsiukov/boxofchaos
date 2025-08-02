import Header from './components/header';
import './App.css';
import './components/header.css';
import boxIcon from './images/box.png';

function IconButton({ onClick, alt = "Box", ...props }) {
  return (
    <button
      type="button"
      aria-label="box button"
      className="icon-button"
      onClick={onClick}
      {...props}
    >
      <img src={boxIcon} alt={alt} />
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
        <section id="game" />
      </main>
    </>
  );
}

export default App;
