import React from "react";
import { Input } from "semantic-ui-react";
import "./style.css";

const RepoSearchBox = ({ handleSearchChange }) => (
  <Input
    as="span"
    focus
    placeholder="Search..."
    className="searchBox"
    onChange={(e) => handleSearchChange(e)}
  />
);

export default RepoSearchBox;
