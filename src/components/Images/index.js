import React from "react";
import "./style.css";

function Images (props) {
    return (
        // Need to get links to work
        <img 
            className = "images"
            src = {process.env.PUBLIC_URL + props.url}
            alt = {process.env.PUBLIC_URL + props.info}
        />
    );
}

export default Images;

