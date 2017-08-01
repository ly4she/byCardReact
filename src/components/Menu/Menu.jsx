import React, {Component} from 'react';

export default class Menu extends Component {
  state = {
    presence: 'header__menu_hideMenu',
    noBtnHider: ''
  }

  hideMenu = () => {
    document.removeEventListener('click', this.state.noBtnHider);
    this.setState({
      presence: 'header__menu_hideMenu',
      noBtnHider: ''
    })
  }

  showMenu = () => {
    const el = this.refs.allMenu;

    const outsideEvtListener = (evt) => {
      if (evt.target === el || el.contains(evt.target)) {
        return;
      } else {
        this.setState({
          presence: 'header__menu_hideMenu'
        })
      }
      document.removeEventListener('click', outsideEvtListener);
    }
    document.addEventListener('click', outsideEvtListener);
    this.setState({
      presence: 'header__menu_showMenu',
      noBtnHider: outsideEvtListener
    })
  }

  render(){
    const toggledClass = this.state.presence + " header__hiddenMenu";
    return (
      <div className="header__menu">
        <div className={toggledClass} ref="allMenu">
          <div className="header__hiddenMenuBtn" onClick={this.hideMenu}></div>
          <a href="">Войти/Зарегистрироваться</a>
          <a href="">О сервисе</a>
          <a href="">ByCard</a>
        </div>
        <div className="header__menuBtn" onClick={this.showMenu}></div>
      </div>

    )
  }
}
