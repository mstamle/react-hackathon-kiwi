import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './index.html';

import FlightContainer from './FlightContainer/FlightContainer.jsx';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>5 Flights from Prague to Valencia tomorrow</h1>
        <FlightContainer/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));