import logo from './logo-01-01.png';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import register from './register.js';

function Register(){
  return(
      register() );
}
function App() {
  return (



      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to development Home Page of <b>ZUBIDY</b>
          </p>
          <input id={"registerP"} type={"button"} value={"Register Page"} onClick={() => window.open('/register', '_blank')}/>
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
        </Routes>
      </BrowserRouter>
  );
}

export default Router;


