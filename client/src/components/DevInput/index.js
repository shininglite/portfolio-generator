import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import './style.css'

const DevInput = () => (
    <Form>
        <Form.Field>
            <label className="devInput">Enter Your Github User Name:</label>
            <input placeholder='user name' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
)

export default DevInput