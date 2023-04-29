import $ from 'jquery';
import './register.css';

function register() {
    $('input').focus(function(event) {
        $(this).closest('.float-label-field').addClass('float').addClass('focus');

    });
    $('input').blur(function() {
        $(this).closest('.float-label-field').removeClass('focus');
        if (!$(this).val()) {
            $(this).closest('.float-label-field').removeClass('float');
        }
    });
    return (
        <div className="register">
            <header className="Register-header">

                <fieldset className="field-header">
                    <h3>Kayıt Ol</h3>

                    <fieldset className="float-label-field">
                        <label htmlFor="txtName">Ad Soyad</label>
                        <input id="txtName" type="text" />
                    </fieldset>

                    <fieldset className="float-label-field">
                        <label htmlFor="txtEmail">E-Posta</label>
                        <input id="txtEmail" type="text" />
                    </fieldset>

                    <fieldset className="float-label-field">
                        <label htmlFor="txtNickname">Kullanıcı Adı</label>
                        <input id="txtNickname" type="text" minLength="4" maxLength="10" />
                    </fieldset>

                    <fieldset className="float-label-field">
                        <label htmlFor="txtPassword">Şifre</label>
                        <input id="txtPassword" type="password" />
                    </fieldset>

                    <fieldset className="float-label-field">
                        <label htmlFor="txtConfirmPassword">Şifre Tekrarı</label>
                        <input id="txtConfirmPassword" type="password" />
                    </fieldset>

                    <fieldset className="float-label-field">
                        <label htmlFor="txtFakulte">Okuduğun Fakülte</label>
                        <input id="txtFakulte" type="text" />
                    </fieldset>

                </fieldset>

                <fieldset className="kuralMail-field">


                    <a className="App-link"
                       href="https://reactjs.org"
                       target="_blank"
                       rel="noopener noreferrer">
                        Kuralları
                    </a>
                    &nbsp;okudum ve kabul ediyorum <input type={"checkbox"} id={"c3"}/> <br/> <br/>

                    Mail bildirim almak istiyorum <input type={"checkbox"} id={"c1"} onClick={boxControl} /> <br/>

                    <p id="t1" style={{ display: "none" }}>
                        Farklı maile bildirim gönder <input type={"checkbox"} id={"c2"} onClick={boxControl}/> <br/>
                    </p>

                    <p id="t2" style={{ display: "none" }}>
                        <fieldset className="float-label-field">
                            <label htmlFor="txtIkiPosta">E-Posta</label>
                            <input id="txtIkiPosta" type="email" />
                        </fieldset>
                    </p>

                </fieldset>
                <input id={"rules"} className={"rulesCss"} type={"button"} value={"Kayıt Ol"}  />
            </header>
        </div>
    );
}

function boxControl() {

    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const t1 = document.getElementById("t1");
    const t2 = document.getElementById("t2");

    if (c1.checked === true) {

        t1.style.display = "block";
    } else {
        t1.style.display = "none";
    }
    if (c2.checked && c1.checked === true) {

        t2.style.display = "block";
    } else {
        t2.style.display = "none";
    }

}

function valueControl() {
    const n1 = document.getElementById("txtName").value.trim();
    const m1 = document.getElementById("txtEmail").value.trim();
    const n2 = document.getElementById("txtNickname").value.trim();
    const p = document.getElementById("txtPassword").value.trim();
    const p2 = document.getElementById("txtConfirmPassword".value.trim());
    const f = document.getElementById("txtFakulte").value.trim();
    const r = document.getElementById("rules").value.trim();

    if (n1 && m1 && n2 && p && p2 && f && r !== "") {
        //Kayıt olma sitesinden başka yere yönlendirilecek
    } else {
        alert("Eksik değer girilmiş")
    }
}

export default register;