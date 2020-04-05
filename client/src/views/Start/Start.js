import React from "react";
import { Link } from "react-router-dom";
import "./start.scss";

const Start = () => {
    return (
        <div className={"Start"}>
            <div className={"Start__choice"}>
                <Link to="/signup" className="button button--big">
                    <h1 className={"Start__choice__title"}>I want to help</h1>
                </Link>
            </div>
            <div className={"Start__choice Start__choice--secondary"}>
                <Link to="/create-errand" className="button button--big">
                    <h1 className={"Start__choice__title"}>I need help</h1>
                </Link>
            </div>
        </div>
    );
};

export default Start;
