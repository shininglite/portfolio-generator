import axios from 'axios'
import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import API from '../../utils/API'
var tableData = [
    { name: 'Project 1', description: "Project description", activeFlag: 'true', activate: "Y" },
    { name: 'Employee_Tracker', description: "This is a very long description intended to stretch past the end of the column.", activeFlag: 'false', activate: "X" },
    { name: 'Code-Quiz', description: "Project description", activeFlag: 'false', activate: "X" },
    { name: 'Personal_Library', description: "Project description", activeFlag: 'false', activate: "X" },
]

export default class DevTable extends Component {
    state = {
        column: null,
        data: tableData,
        direction: null,
    }

    // componentDidMount = () => {
    //     console.log('in componentDidMount')
    //     API.getDeveloper("frunox")
    //         .then(res => this.setState({
    //             tableData: res.data
    //         })
    //         );
    // }

    handleSort = (clickedColumn) => () => {
        const { column, data, direction } = this.state

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    changeFlag = (id) => {
        console.log('clicked', id, tableData[id].activeFlag)
        if (tableData[id].activeFlag === 'false') {
            tableData[id].activeFlag = 'true';
        } else {
            tableData[id].activeFlag = 'false';
        }
        console.log(tableData[id].activeFlag)
    }

    render() {
        const { column, data, direction } = this.state

        return (
            <Table sortable celled fixed singleLine striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={4}
                            sorted={column === 'name' ? direction : null}
                            onClick={this.handleSort('name')}
                        >
                            Repo Name
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'description' ? direction : null}
                            onClick={this.handleSort('description')}
                        >
                            Description
                        </Table.HeaderCell>
                        <Table.HeaderCell width={2} textAlign='center'
                            sorted={column === 'activeFlag' ? direction : null}
                            onClick={this.handleSort('activeFlag')}
                        >
                            Active
                        </Table.HeaderCell>
                        <Table.HeaderCell width={2} textAlign='center'
                            sorted={column === 'activate' ? direction : null}
                            onClick={this.handleSort('activate')}
                        >
                            Activate
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(data, ({ description, activeFlag, name, activate }, index) => (
                        <Table.Row key={name}>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{description}</Table.Cell>
                            <Table.Cell textAlign='center'>{activeFlag}</Table.Cell>
                            <Table.Cell id={index} value={index} textAlign='center' selectable onClick={e => this.changeFlag(e.target.id)}>{activate}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )
    }
}