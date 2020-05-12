// import axios from "axios";
import _ from "lodash";
import React, { Component, Fragment } from "react";
import { Table, Form } from "semantic-ui-react";
import API from "../../utils/API";
import './style.css'

var tableData = []

export default class DevTable extends Component {

  state = {
    column: null,
    data: null,
    direction: null,
    rowClick: -1,
    activeFlag: "false",
    deploymentLink: "",
    repoName: ""
  };

  componentDidMount = () => {
    console.log('1.  in componentDidMount')
    API.getActiveDeveloper()
      .then(res => {
        this.setState({
          data: res.data.repositories,
        })
        console.log('7. success', res.data.repositories[0].deploymentLink, res.data.repositories[0].activeFlag);
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
    console.log(name, value)
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  updateFlag = (id) => {
    console.log('clicked', id)

    // if (tableData[id].activeFlag === 'false') {
    //   tableData[id].activeFlag = 'true';
    // } else {
    //   tableData[id].activeFlag = 'false';
    // }
    // console.log(tableData[id].activeFlag)
  };

  showDevRepo = (id) => {
    console.log('clicked', id)
    console.log(tableData[id]._id)
    this.setState({
      rowClick: id,
      deploymentLink: tableData[id].deploymentLink,
      repoName: tableData[id].repoName
    });;
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
            <Fragment>
              <div className="boxTitle">
                <p>
                  Information for Repository: <span className="repoName">{this.state.repoName}</span>
                </p>
              </div>
              <Form inverted className="repoForm">
                <Form.Group grouped className="inputGroup">
                  <Form.Field width={2}>
                    <label className="inputLabel">Active Flag Value:  </label>
                    <input width={2} name="activeFlag" label='ActiveFlag Value' value={this.state.activeFlag} control='input' />
                  </Form.Field>
                  <Form.Field label='' control='button' name="updateFlag" onClick={() => this.updateFlag(this.state.rowClick)}>
                    Update
                  </Form.Field>
                </Form.Group>
                <Form.Group grouped className="inputGroup">
                  <Form.Field>
                    <label className="inputLabel">Deployment URL:  </label>
                    <input width={10} name="deploymentLink" label='Deployment URL: ' value={this.state.deploymentLink} control='input' />
                  </Form.Field>
                  <Form.Field label='' control='button' name="deploymentLink" onClick={this.handleInputChange}>
                    Update
                  </Form.Field>
                </Form.Group>
              </Form>
            </Fragment>
          }

        </div>

      </Fragment >
    );
  }
}
