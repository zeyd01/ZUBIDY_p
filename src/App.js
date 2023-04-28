import logo from './logo-01-01.png';
import './App.css';

function combinedClick1(){
  openScript1();
  valueControl();
}

function openScript1() {
  window.open('registerP.js', '_blank');
}
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
function valueControl() {
  const n1= document.getElementById("name").value.trim();
  const m1= document.getElementById("mail1").value.trim();
  const n2= document.getElementById("nickname").value.trim();
  const p= document.getElementById("passW").value.trim();
  const f= document.getElementById("fakulte").value.trim();
  const c= document.getElementById("classNo").value.trim();
  const r= document.getElementById("rules").value.trim();

  if (n1 && m1 && n2 && p && f && c && r!=="") {
    //Kayıt olma sitesinden başka yere yönlendirilecek
  } else {
    alert("Eksik değer girilmiş")
  }
}
function App() {

  return (

    <div className="App">


      <header className="App-header">

        <img src={logo} className="App-logo" alt="logopipi" />

        <p>
          <p id={"big"}>
          Ad Soyad: <input id={"name"} defaultValue={null}/> <br/>
          E-Posta: <input id={"mail1"}/> @firat.edu.tr <br/>
          Kullanıcı Adı: <input id={"nickname"}/> <br/>
          Şifre: <input id={"passW"} type={"password"}/> <br/>
          Okuduğun Fakülte <input id={"fakulte"} type={"search"}/> <br/>
          Kaçıncı Sınıf: <input id={"classNo"} type={"number"} min="1" max="7"/> <br/>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Kuralları
          </a>
          &nbsp;okudum ve kabul ediyorum <input type={"checkbox"} id={"c3"}/> <br/> <br/>

            Mail bildirim almak istiyorum <input type={"checkbox"} id={"c1"} onClick={boxControl} /> <br/>
          </p>
          <p id="t1" style={{ display: "none" }}>
            Farklı maile bildirim gönder <input type={"checkbox"} id={"c2"} onClick={boxControl}/> <br/>
          </p>

          <p id="t2" style={{ display: "none" }}>
            İkinci Mail adresi <input  type={"email"}/> <br/>
          </p>

          <input id={"rules"} type={"button"} value={"Kayıt Ol"} onClick={combinedClick1} />

        </p>

      </header>
    </div>
  );

}

export default App;
