import React, { Component } from 'react';
import { Menu, Modal, Grid, Segment, Form, Button, Header } from 'semantic-ui-react';
import "./style.css";

class DevNav extends Component {
  constructor() {
    super();
    this.state = {
      isShowing: false
    }
  }

  openModal = () => {
    console.log('login modal')
    this.setState({ isShowing: true });
  }

  closeModal = () => {
    this.setState({ isShowing: false });
  }

  render() {
    return (
      <div>
        <Menu className="menu">
          <Menu.Item header>Portfolio Generator</Menu.Item>
          <Menu.Menu position="left">
            <Menu.Item as="a" href="/" name="home">
              Home
        </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item onClick={this.openModal} name="login">
              Github Login
        </Menu.Item>

            <Menu.Item as="a" name="logout">
              Log Out
        </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div>
          {this.state.isShowing ? <div onClick={this.closeModal}></div> : null}
          <Modal>
            <Modal.Header>Log In</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Grid centered columns={2}>
                  <Grid.Column>
                    <Header as="h2" textAlign="center">
                      Login
                        </Header>
                    <Segment>
                      <Form size="large">
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="Github user name"
                        />
                        <Form.Input
                          fluid
                          icon="lock"
                          iconPosition="left"
                          placeholder="Password"
                          type="password"
                        />

                        <Button color="blue" fluid size="large">
                          Login
                                </Button>
                      </Form>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      </div >
    )
  }
}

export default DevNav;