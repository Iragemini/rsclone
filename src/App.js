import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import API from './modules/api';
import Teams from './modules/Teams/Teams';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/league">Лиги</NavLink>
            </li>
            <li>
              <NavLink to="/teams">Команды</NavLink>
            </li>
            <li>
              <NavLink to="/calendar">Календарь</NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/" exact render={() => <h1>Главная</h1>} />
        <Route path="/league" render={() => <API type={ ['competitions', 'League'] }/>} />
        <Route path="/teams" component={Teams} />
      </div>
    )
  }
}

export default App;