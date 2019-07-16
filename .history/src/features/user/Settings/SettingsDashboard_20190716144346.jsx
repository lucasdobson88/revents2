import React from 'react';
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Route } from 'react-router';
import BasicPage from './BasicPage';

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Route path="/settings/basic" component={BasicPage} />
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default SettingsDashboard;
