import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import DevNav from "../components/DevNav";
import DevHeader from "../components/DevHeader";
import DevContainer from '../components/DevContainer'
import DevTable from '../components/DevTable'

class Developer extends Component {

    render() {
        return (
            <div>
                <DevNav />
                <Container>
                    <DevHeader />
                    <DevContainer />
                    <DevTable />
                </Container>
            </div>
        );
    }
}

export default Developer;