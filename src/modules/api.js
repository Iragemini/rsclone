import React from 'react';

export default class API extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const baseUrl = 'http://api.football-data.org/v2/competitions';
    fetch(baseUrl,
      {
        type: 'GET',
        headers: {
          'X-Auth-Token': '4a5f8917f07742ebb6ab8be1d75a4f41',
        },
        dataType: 'json',
      })
      .then((response) => response.json())
      .then((json) => this.setState({ data: json.competitions }));
  }

  render() {
    return (
          <div>
            <h1>League</h1>
            {
              this.state.data.length === 0
                ? 'Loading leagues...'
                : this.state.data.map((data) => (
                  <p key={data.id}>
                      {data.name}
                  </p>
                ))
            }
          </div>
    );
  }
}
