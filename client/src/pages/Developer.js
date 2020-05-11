import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import DevNav from "../components/DevNav";
import DevHeader from "../components/DevHeader";
import DevContainer from '../components/DevContainer'
import DevTable from '../components/DevTable'

class Developer extends Component {
    state = {
        books: []
    };

    // componentDidMount() {
    //     this.getSavedBooks();
    // }

    // getSavedBooks = () => {
    //     API.getSavedBooks()
    //         .then(res =>
    //             this.setState({
    //                 books: res.data
    //             })
    //         )
    //         .catch(err => console.log(err));
    // };

    // handleBookDelete = id => {
    //     API.deleteBook(id).then(res => this.getSavedBooks());
    // };

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