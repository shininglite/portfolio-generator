// import axios from "axios";
import _ from "lodash";
import React, { Component, Fragment } from "react";
import { Table, Form, Button } from "semantic-ui-react";
import API from "../../utils/API";
import RepoSearchBox from "../RepoSearchBox";
import './style.css'

var tableData = []

export default class DevTable extends Component {

  state = {
    id: null,
    column: null,
    data: null,
    sort: null,
    direction: null,
    rowClick: -1,
    activeFlag: "false",
    deploymentLink: "",
    repoName: "",
    filteredUsers: null,
    searched: -1,
    searchID: null
  };

  componentDidMount = () => {
    console.log('1.  in componentDidMount')
    API.getActiveDeveloper()
      .then(res => {
        console.log(res)
        this.setState({
          ...this.state,
          data: res.data.repositories,
          filteredUsers: res.data.repositories,
        })
        tableData = res.data.repositories
      })
  }

  handleSort = (clickedColumn) => () => {
    const { column, filteredUsers, direction } = this.state;
    console.log('in handleSort', clickedColumn)
    if (column !== clickedColumn) {
      this.setState({
        ...this.state,
        column: clickedColumn,
        filteredUsers: _.sortBy(filteredUsers, [clickedColumn]),
        direction: "ascending",
      });

      return;
    }

    this.setState({
      filteredUsers: filteredUsers.reverse(),
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
      ...this.state,
      deploymentLink: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let value = this.state.deploymentLink
    console.log(value)
    this.setState({
      ...this.state,
      deploymentLink: value,
    }, () => {
      console.log(this.state.deploymentLink)
      this.updateDB(this.state.id, { deploymentLink: this.state.deploymentLink })
    });

  };

  handleSearchChange = event => {

    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.data.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({
      ...this.state,
      filteredUsers: filteredList,
    }, () => {
      console.log('filteredUsers: ', this.state.filteredUsers)
    });
  }

  updateFlag = (id) => {
    console.log('clicked', id)
    if (tableData[id].activeFlag === 'false') {
      tableData[id].activeFlag = 'true';
    } else {
      tableData[id].activeFlag = 'false';
    }
    console.log(tableData[id].activeFlag)
    this.setState({
      ...this.state,
      activeFlag: tableData[id].activeFlag,
    }, () => {
      console.log(this.state.id, { activeFlag: this.state.activeFlag })
      this.updateDB(this.state.id, { activeFlag: this.state.activeFlag })
    });
  };

  updateDB = (id, property) => {
    // console.log('in updateDB:  ', id, property)
    API.updateRepositories(id, property)
      .then(res => {
        console.log('7. success');
      })
      .catch(err => {
        console.log(err)
      })
  }

  showDevRepo = (repo) => {
    // console.log('clicked', repo)
    let id = tableData.findIndex(e => e.repoID === repo)
    console.log('id: ', id, 'deployLink: ', tableData[id].deploymentLink)
    console.log(tableData[id]._id)
    this.setState({
      ...this.state,
      id: tableData[id]._id,
      rowClick: id,
      deploymentLink: tableData[id].deploymentLink,
      repoName: tableData[id].repoName,
      activeFlag: tableData[id].activeFlag
    });;
  };

  render() {
    const { column, sort, direction, rowClick, filteredUsers, repoID } = this.state;

    return (
      <Fragment>
        <span className="searchLine">
          Search for Key Words ->
          <RepoSearchBox handleSearchChange={this.handleSearchChange} />
        </span>
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
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {_.map(
                filteredUsers,
                ({ repoDesc, activeFlag, repoName, repoID }, index) => (
                  <Table.Row className="devRow" id={index} key={index} value={index} active onClick={e => this.showDevRepo(repoID)}>
                    <Table.Cell>{repoName}</Table.Cell>
                    <Table.Cell>{repoDesc}</Table.Cell>
                    <Table.Cell textAlign="center">{activeFlag}</Table.Cell>
                  </Table.Row>
                )
              )}
            </Table.Body>
          </Table >
        </div >
        {rowClick >= 0 &&
          <div className="formBox">

            <Fragment>
              <div className="boxTitle">
                <p>
                  Information for Repository: <span className="repoName">{this.state.repoName}</span>
                </p>
              </div>
              <Form inverted className="repoForm" onSubmit={this.handleFormSubmit}>
                <Form.Group grouped className="inputGroup">
                  <Form.Field width="5">
                    <p className="flagLabel">Click 'Change' Button</p>
                    <label className="inputLabel">Active Flag: {this.state.activeFlag}</label>
                    {/* <input width={2} name="activeFlag" label='ActiveFlag Value' value={this.state.activeFlag} control='input' /> */}
                  </Form.Field>
                  <Form.Field label='' control='button' color="blue" name="updateFlag" onClick={() => this.updateFlag(this.state.rowClick)}>
                    Change
                  </Form.Field>
                </Form.Group>
                <Form.Group grouped className="inputGroup">
                  <Form.Field>
                    <p className="flagLabel">Enter Deployment URL </p>
                    <label className="inputLabel">Deployment URL: <span className="repoName"></span></label>
                    <input className="urlBox" name="deploymentLink" label='Deployment URL: ' placeholder={this.state.deploymentLink} value={this.state.value} onChange={(event) => this.handleInputChange(event)} />
                  </Form.Field>
                  <Form.Field>
                    <Button primary type='submit'>Update</Button>

                  </Form.Field>
                </Form.Group>
              </Form>
            </Fragment>
          </div>
        }
      </Fragment >
    );
  }
}
