import React, {Component} from 'react'
import PropTypes from 'prop-types';
import UserConsumer from "../context";

export default class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isVisible : false

        }
    }


    static defaultProps = {
        name : "Bilgi Yok",
        salary : "Bilgi Yok",
        department : "Bilgi Yok"

    }
    onClickEvent = (e) =>{
     this.setState({
          isVisible : !this.state.isVisible
         })

               }

     onDeleteUser = (dispatch,e) =>{
     const{id} = this.props;
         dispatch({type : "DELETE_USER",payload:id});

     }



    render(){
      const {id,name,salary,department} = this.props
        const{isVisible} = this.state;
      return(
          <UserConsumer>
              {
                  value => {
                      const{dispatch} = value;
                       return(
                       <div className="col -md-8 mb-4">
                       <div className="card">
                       <div className="card-header d-flex justify-content-between">
                       <h4 className="d-inline"onClick = {this.onClickEvent}>{name}</h4>
                           <i onClick = {this.onDeleteUser.bind(this,dispatch)} className = "far fa-trash-alt" style = {{cursor : "pointer"}}></i>


                       </div>{
               isVisible ? <div className="card-body">
                     <p className="card-text">Maaş : {salary}</p>
                     <p className="card-text">Departman : {department}</p>
                     <p className="card-text">İsim : {name}</p>

                 </div> : null
             }
                       </div>


                       </div>


                        )

                  }
              }
          </UserConsumer>
      )


    }


}
