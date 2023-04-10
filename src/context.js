import React, {Component} from 'react';
const UserContext = React.createContext();
const reducer = (state,action) =>{
    switch (action.type) {
        case "DELETE_USER":
            return{
                ...state,
                users: state.users.filter(user =>action.payload !== user.id)
            }
        default :
            return state
    }
}

export class UserProvider extends Component {
    state = {
        users: [
            { id : 1,
                name : "Umut Babalık",
                salary : "2000",
                department : "Back-end"},
            { id : 2,
                name : "Zeyd Iyigoren",
                salary : "2000",
                department : "Front-end"},
            { id : 3,
                name : "Burak Tuncel",
                salary : "2000",
                department : "Front-end"},
            { id : 4,
                name : "Ibrahim Demir",
                salary : "2000",
                department : "Back-end"},
            { id : 5,
                name : "Deniz Bektas",
                salary : "2000",
                department : "Back-end"}


        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))

        }

    }
    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;