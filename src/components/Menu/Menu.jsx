import React, {Component} from 'react';

export default class Menu extends Component {
  state = {
    presence: 'header__menu_hideMenu'
  }

  toggleMenu = (event) => {
    var el = this.refs.allMenu;
    this.setState({
      presence: 'header__menu_showMenu'
    })
    console.log(el);
    const outsideEvtListener = (evt) => {
      if (evt.target === el || el.contains(evt.target)) {
        return;
      } else {
        console.log('1');
        this.setState({
          presence: 'header__menu_hideMenu'
        })
      }
      document.removeEventListener('click', outsideEvtListener);
    }
    document.addEventListener('click', outsideEvtListener);
  }
  render(){
    const toggledClass = this.state.presence + " header__hiddenMenu";
    return (
      <div className="header__menu">
        <ul className={toggledClass} ref="allMenu">
          <li><a href="">Link 1</a></li>
          <li><a href="">Link 2</a></li>
          <li><a href="">Link 3</a></li>
        </ul>
        <div className="header__menuBtn" onClick={this.toggleMenu}></div>
      </div>

    )
  }
}
