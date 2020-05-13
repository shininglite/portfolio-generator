import React from "react";
import "./style.css";

function SearchBox({ handleSearchChange }) {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => handleSearchChange(e)}
                />
            </form>
        </div>
    );
}
export default SearchBox;
