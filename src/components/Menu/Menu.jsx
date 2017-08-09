import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Drawer, DrawerHeader, DrawerHeaderContent, DrawerContent, Navigation} from 'react-mdc-web';

export default class Menu extends Component {

  state ={
    isOpen: false
  }

  render(){

    return (
      <div className="header__menu">
        <Button raised className="header__menuBtn" onClick={()=> { this.setState({isOpen: !this.state.isOpen}) }}>
        <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
        </Button>
          <Drawer
            open={this.state.isOpen}
            onClose={()=> { this.setState({isOpen: false}) }}
          >
            <DrawerHeader>
              <DrawerHeaderContent>
                <Button raised className="header__hiddenMenuBtn" onClick={()=> { this.setState({isOpen: !this.state.isOpen}) }}>
                <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                </Button>
                Меню
              </DrawerHeaderContent>
            </DrawerHeader>
            <DrawerContent>
              <Navigation>
                <Link to="/LogReg">LogReg</Link>
                <Link to="/Cabinet">Cabinet</Link>
                <Link to="/">Films</Link>
              </Navigation>
            </DrawerContent>
          </Drawer>


          {/* <a href="">Войти/Зарегистрироваться</a>
          <a href="">О сервисе</a>
          <a href="">ByCard</a>
        </div>
        <div className="header__menuBtn" onClick={this.showMenu}></div> */}
      </div>

    )
  }
}
