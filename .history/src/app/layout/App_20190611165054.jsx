import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container, Divider } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
