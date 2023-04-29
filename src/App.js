import logo from './logo-01-01.png';
import './App.css';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './register.js';
import Profile from './profile.js';
import Mainpage from "./mainpage.js";


function App() {
  return (



      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to development Home Page of <b>ZUBIDY</b>
          </p>

            <fieldset className="butonlar">
            <input id={"buton"} type={"button"} value={"Register Page"}  onClick={() => window.open('/register', '_blank')}/>
            <input id={"buton"} type={"button"} value={"Main Page"} onClick={() => window.open('/main', '_blank')}/>
            <input id={"buton"} type={"button"} value={"Profile Page"} onClick={() => window.open('/profile', '_blank')}/>
            </fieldset>

        </header>
      </div>


  );
}

function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Router;


