import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component {
    constructor()
    {
        super();
        this.state={
            modalIsOpen : false
        };
    }

    openModal = () =>{
        this.setState({modalIsOpen : true})
    }
    
    closeModal = () =>{
        this.setState({modalIsOpen : false})
    }
    
  render() {
    return (
      <div>
        <header className="app-header">
        <img src={logo} className="app-logo" alt="logo"></img>
          <div className="login-button">
            <Button variant="contained" color="default" onClick={this.openModal}>
              Login
            </Button>
          </div>
        </header>
        <Modal ariaHideApp={false}   isOpen={this.state.modalIsOpen} contentLabel="Log in"
        onRequestClose={this.closeModal}>

        </Modal>
      </div>
    );
  }
}

export default Header;
