import logo from './logo-01-01.png';
import './App.css';

function boxControl() {

  const c1 = document.getElementById("c1");
  const c2=document.getElementById("c2");
  const t1 = document.getElementById("t1");
  const t2=document.getElementById("t2");

  if (c1.checked === true){

      t1.style.display = "block";
    } else {
      t1.style.display = "none";
    }
  if (c2.checked && c1.checked === true){

    t2.style.display = "block";
  } else {
    t2.style.display = "none";
  }

}
function App() {

  return (

    <div className="App">


      <header className="App-header">

        <img src={logo} className="App-logo" alt="logopipi" />

        <p>
          Ad Soyad: <input/> <br/>
          E-Posta: <input/> @firat.edu.tr <br/>
          Kullanıcı Adı: <input/> <br/>
          Şifre: <input/> <br/>
          Okuduğun Fakülte <input type={"search"}/> <br/>
          Kaçıncı Sınıf: <input  type={"number"} min="1" max="7"/> <br/>
          Mail bildirim almak istiyorum <input type={"checkbox"} id={"c1"} onClick={boxControl} /> <br/>

          <p id="t1" style={{ display: "none" }}>
          Bildirim alacağım mail adresi farklı olmasını istiyorum <input type={"checkbox"} id={"c2"} onClick={boxControl}/> <br/>
          </p>

          <p id="t2" style={{ display: "none" }}>
          &nbsp;&nbsp;İkinci Mail adresi <input  type={"email"}/> <br/>
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            KURALLARI
          </a>
          &nbsp;okudum ve kabul ediyorum <input type={"checkbox"} id={"c3"}/> <br/>
          <input type={"button"} value={"Kayıt Ol"}/>
        </p>

      </header>
    </div>
  );

}

export default App;
