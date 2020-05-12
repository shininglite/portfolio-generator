// import axios from "axios";
import _ from "lodash";
import React, { Component, Fragment } from "react";
import { Table, Form } from "semantic-ui-react";
import API from "../../utils/API";
import './style.css'
var id = -1;

var tableData = []

export default class DevTable extends Component {

  state = {
    column: null,
    data: null,
    direction: null,
    rowClick: -1,
  };

  componentDidMount = () => {
    console.log('1.  in componentDidMount')
    API.getActiveDeveloper()
      .then(res => {
        this.setState({
          data: res.data.repositories
        })
        console.log('7. success', res.data.repositories[0].repoName, res.data.repositories[0].activeFlag);
        tableData = res.data.repositories
        console.log(tableData)

      })
  }

  handleSort = (clickedColumn) => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending",
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending",
    });
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  changeFlag = (id) => {
    console.log('clicked', id)
    if (tableData[id].activeFlag === 'false') {
      tableData[id].activeFlag = 'true';
    } else {
      tableData[id].activeFlag = 'false';
    }
    console.log(tableData[id].activeFlag)
  };

  showDevRepo = (id) => {
    console.log('clicked', id)
    console.log(tableData[id]._id)
    this.setState({
      rowClick: id
    });;
    // if (tableData[id].activeFlag === 'false') {
    //   tableData[id].activeFlag = 'true';
    // } else {
    //   tableData[id].activeFlag = 'false';
    // }
    // console.log(tableData[id].activeFlag)
  };

  render() {
    const { column, data, direction, rowClick } = this.state;

    return (
      <Fragment>
        <div className="devTable">
          <Table sortable celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell
                  width={4}
                  sorted={column === "name" ? direction : null}
                  onClick={this.handleSort("name")}
                >
                  Repo Name
            </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={column === "description" ? direction : null}
                  onClick={this.handleSort("description")}
                >
                  Description
            </Table.HeaderCell>
                <Table.HeaderCell
                  width={2}
                  textAlign="center"
                  sorted={column === "activeFlag" ? direction : null}
                  onClick={this.handleSort("activeFlag")}
                >
                  Active
            </Table.HeaderCell>
                <Table.HeaderCell
                  width={2}
                  textAlign="center"
                  sorted={column === "archiveFlag" ? direction : null}
                  onClick={this.handleSort("archiveFlag")}
                >
                  archiveFlag
            </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {_.map(
                data,
                ({ repoDesc, activeFlag, repoName, archiveFlag }, index) => (
                  <Table.Row className="devRow" id={index} key={index} value={index} active onClick={e => this.showDevRepo(index)}>
                    <Table.Cell>{repoName}</Table.Cell>
                    <Table.Cell>{repoDesc}</Table.Cell>
                    <Table.Cell textAlign="center">{activeFlag}</Table.Cell>
                    <Table.Cell textAlign="center">{String(archiveFlag)}</Table.Cell>
                  </Table.Row>
                )
              )}
            </Table.Body>
          </Table >
        </div >
        <div className="formBox">
          {rowClick >= 0 &&
            <Form inverted>
              <Form.Group widths='equal'>
                <Form.Field label='ActiveFlag Value: ' control='input' />
                <Form.Field label='An HTML <select>' control='select'>
                  <option value='true'>True</option>
                  <option value='false'>False</option>
                </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field label='ActiveFlag Value: ' control='input' />
              </Form.Group>
              <Form.Field label='Submit' control='button'>
                Submit
          </Form.Field>
            </Form>
          }

        </div>

      </Fragment >
    );
  }
}
