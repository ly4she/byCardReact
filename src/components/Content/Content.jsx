import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Films from '../Films/Films.jsx';
import LogReg from '../LogReg/LogReg.jsx';
import Cabinet from '../Cabinet/Cabinet.jsx';

export default function Content() {
  return(
    <div className="content">
      <div className="content__logo">
      <h2>Узнай первым о появлении билетов в продаже</h2>
    </div>
    <Switch>
      <Route exact path="/" component={Films} />
      <Route path="/LogReg" component={LogReg} />
      <Route path="/Cabinet" component={Cabinet} />
    </Switch>
  </div>
  )
}
