
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import './App.css';

import React, {Component} from 'react';

class App extends Component {

    render() {
        return (
            <div className = "container">

                <Navbar title = "Calisan Bilgileri"/>
                <AddUser/>
                <Users />








            </div>


        );
    }
}

export default App;
