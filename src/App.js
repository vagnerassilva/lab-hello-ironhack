import logo from './assets/images/ironhack-logo.svg';
import menu from './assets/images/menu-top.svg';
import icon1 from './assets/images/icon1.png';
import icon2 from './assets/images/icon2.png';
import icon3 from './assets/images/icon3.png';
import icon4 from './assets/images/icon4.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="Nav">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={menu} className="Menu-logo" alt="menu" />
        </nav>
        <h1>
          Say Hello to<br></br>
          ReactJS
        </h1>
        <h4>
          You will learn how to use<br></br>
          the monst popular frontend library,<br></br>
          and become a super Ninja developer.
        </h4>
        <h4>
          Awesome!
        </h4>
      </header>

      <section className="Icons-area">
        <div>
          <img src={icon1} className="Icon1" alt="icon1" />
          <h3>Declarative</h3>
          <p>
            React makes it<br></br>
            painless to create<br></br>
            interactive UIs.
          </p>

        </div>

        <div>
          <img src={icon2} className="Icon2" alt="icon2" />
          <h3>Declarative</h3>
          <p>
            React makes it<br></br>
            painless to create<br></br>
            interactive UIs.
          </p>

        </div>

        <div>
          <img src={icon3} className="Icon3" alt="icon3" />
          <h3>Declarative</h3>
          <p>
            React makes it<br></br>
            painless to create<br></br>
            interactive UIs.
          </p>

        </div>
        <div>
          <img src={icon4} className="Icon4" alt="icon4" />
          <h3>Declarative</h3>
          <p>
            React makes it<br></br>
            painless to create<br></br>
            interactive UIs.
          </p>

        </div>

      </section>

    </div>
  );
}

export default App;
