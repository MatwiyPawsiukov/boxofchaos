import { useState } from "react";

export default function Header(){
    const [ open, setOpen ] = useState(false);
    
    return(
        <header className="site-header">
      <div className="container">
        <div className="logo">MyApp</div>
        <nav className={`nav ${open ? "open" : ""}`}>
          <a href="#game" onClick={() => setOpen(false)}>Game</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
        </nav>
        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
    )
}