import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import "./style.css";

export default () => (
  <Menu className="menu">
    <Menu.Item header>Portfolio Generator</Menu.Item>
    <Menu.Menu position="left">
      <Menu.Item as="a" name="login">
        Home
        </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item as="a" name="login">
        Github Login
        </Menu.Item>

      <Menu.Item as="a" name="register">
        Log Out
        </Menu.Item>
    </Menu.Menu>
  </Menu>
);