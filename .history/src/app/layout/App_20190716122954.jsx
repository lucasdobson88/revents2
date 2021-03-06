import React, { Component, Fragment } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import EventsDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';
import EventForm from '../../features/event/EventForm/EventForm';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Route exact path="/" component={HomePage} />
      </Fragment>
      <Fragment>
        <NavBar />
        <Container className="main">
          <Route path="/events" component={EventDashboard} />
          <Route path="/events/:id" component={EventsDetailedPage} />
          <Route path="/people" component={PeopleDashboard} />
          <Route path="/profile/:id" component={UserDetailedPage} />
          <Route path="/settings" component={SettingsDashboard} />
          <Route path="/createEvent" component={EventForm} />
        </Container>
      </Fragment>
    );
  }
}

export default App;
