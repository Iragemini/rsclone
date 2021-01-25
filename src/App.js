import React, { Component } from 'react';
import NavMenu from './pages/Menu';

const style = {
  app: {
    marginTop: '30px',
  },
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: [
        {
          id: 1, name: 'Главная', path: '/', page: 'Main', type: '',
        },
        {
          id: 2, name: 'Лиги', path: '/leagues', page: 'Leagues', type: 'competitions',
        },
        {
          id: 3, name: 'Команды', path: '/teams', page: 'Teams', type: 'teams',
        },
      ],
    };
  }

  render() {
    return (
      <div className="container" style={ style.app }>
        <NavMenu menu={ this.state.menu }/>
      </div>
    );
  }
}

export default App;
