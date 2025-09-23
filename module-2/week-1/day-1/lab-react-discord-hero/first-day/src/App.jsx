import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import hamburgerIcon from "./assets/menu-icon.png";
import backgroundImage from "./assets/discord-background.png";
function App() {
  return (
    <>
      <nav>
        <img src={discordLogo} alt="discord logo" />
        <img src={hamburgerIcon} alt="hamburger icon" />
      </nav>
      <header>
        <h1>IMAGINE A PLACE ...</h1>
      </header>
      <section>
        <p>
          ... where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <section id="btn-container">
          <button>Download for Mac</button>
          <button id="discord-btn">Open Discord in your browser</button>
        </section>
        <img
          src={backgroundImage}
          alt="background image"
          className="background-img"
        />
      </section>
    </>
  );
}

export default App;
