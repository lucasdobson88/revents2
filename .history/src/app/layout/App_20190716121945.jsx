import React, { Component, Fragment } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <Route path="/" component={HomePage} />
          <Route path="/events" component={EventDashboard} />
          <Route path="/events" component={EventDashboard} />
          <Route path="/events" component={EventDashboard} />
          <Route path="/events" component={EventDashboard} />
          <Route path="/events" component={EventDashboard} />
        </Container>
      </Fragment>
    );
  }
}

export default App;
