import React, { Component } from 'react';
import NavMenu from './pages/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: [
        {
          id: 1, name: 'Список лиг', path: '/leagues', page: 'leagues', type: 'competitions',
        },
        {
          id: 2, name: 'Список команд', path: '/teams', page: 'teams', type: 'teams',
        },
        {
          id: 3, name: 'Календарь', path: '/calendar', page: 'calendar', type: '',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <NavMenu menu={ this.state.menu }/>
      </div>
    );
  }
}

export default App;
