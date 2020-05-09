import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Segment,
} from 'semantic-ui-react';

export default () => (
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
);