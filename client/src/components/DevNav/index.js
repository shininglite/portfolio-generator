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

  render() {
    return (
      <div>
        <Menu className="menu">
          <Menu.Item header></Menu.Item>
          <Menu.Menu position="left">
            <Menu.Item as="a" href="/" name="home">
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item onClick={this.openModal} name="login">
            </Menu.Item>

            <Menu.Item as="a" name="logout">
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div>
          {this.state.isShowing ? <div onClick={this.closeModal}></div> : null}
          <Modal>
            <Modal.Header></Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Grid centered columns={2}>
                  <Grid.Column>
                    <Header as="h2" textAlign="center">
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