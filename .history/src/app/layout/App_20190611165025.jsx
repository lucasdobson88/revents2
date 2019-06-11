import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <h1>Re-vents</h1>
        <EventDashboard />
      </Container>
    );
  }
}

export default App;
