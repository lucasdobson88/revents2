import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const SignedOutMenu = () => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Login" />
      <Button
        basic
        inverted
        content="Sign Out"
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
