import logo from "./logo-01-01.png";
import './registerP.css';

function registerP() {
    return (
        <div className="registerP">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    E-Posta: <input type={"email"}/> @firat.edu.tr
                </p>

            </header>
        </div>
    );
}
export default registerP();