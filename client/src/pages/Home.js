import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import HomeNav from "../components/HomeNav";
import HomeHeader from "../components/HomeHeader";
import HomeContainer from '../components/HomeContainer'


class Home extends Component {
    state = {
        books: []
    };

    render() {
        return (
            <div>
                <HomeNav />
                <Container>
                    <HomeHeader />
                    <HomeContainer />
                </Container>
            </div>
        );
    }
}

export default Home;