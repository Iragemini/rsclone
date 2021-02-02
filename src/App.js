import React, { Component } from 'react';
import MenuRoutes from './routes/MenuRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

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
        <Header menu={ this.state.menu }/>
            
        <MenuRoutes/>

        <Footer />
      </div>
    );
  }
}

export default App;
