import React, {Component} from 'react';

import {Button, Drawer, DrawerHeader, DrawerHeaderContent, DrawerContent, Navigation} from 'react-mdc-web';

export default class Menu extends Component {

  state ={
    isOpen: false
  }

  render(){

    return (
      <div className="header__menu">
        <Button raised className="header__menuBtn" onClick={()=> { this.setState({isOpen: !this.state.isOpen}) }}>
          <i className="material-icons">&#xE5D2;</i>
        </Button>
          <Drawer
            open={this.state.isOpen}
            onClose={()=> { this.setState({isOpen: false}) }}
          >
            <DrawerHeader>
              <DrawerHeaderContent>
              <Button raised className="header__hiddenMenuBtn" onClick={()=> { this.setState({isOpen: !this.state.isOpen}) }}>
                <i className="material-icons">&#xE5CD;</i>
                </Button>
                Меню
              </DrawerHeaderContent>
            </DrawerHeader>
            <DrawerContent>
              <Navigation>
                <a href='#' selected>Bus</a>
                <a href='#'>Railway</a>
                <a href='#'>Bike</a>
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
