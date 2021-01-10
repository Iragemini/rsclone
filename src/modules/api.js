import React from 'react';
import PropTypes from 'prop-types';
import List from './components/List';

class API extends React.Component {
  constructor(props) {
    super();
    this.state = {
      type: props.type,
      data: [],
    };
  }

  componentDidMount() {
    const baseUrl = `http://api.football-data.org/v2/${this.state.type[0]}`;
    fetch(baseUrl,
      {
        type: 'GET',
        headers: {
          'X-Auth-Token': '4a5f8917f07742ebb6ab8be1d75a4f41',
        },
        dataType: 'json',
      })
      .then((response) => response.json())
      .then((json) => this.setState({ data: json[this.state.type[0]] }));
  }

  render() {
    return (
            <div>
                <h1>{ this.state.type[1] }</h1>
                {
                    this.state.data.length === 0
                      ? `Loading ${this.state.type[1]}...`
                      : <List list={ this.state.data } />
                }
            </div>
    );
  }
}

API.propTypes = {
  type: PropTypes.array.isRequired,
};

export default API;
