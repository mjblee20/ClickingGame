import React from "react";
import "./style.css";

function Images (props) {
    return (
        <img 
            className = "images"
            src = {props.url}
            alt = {props.info}
        />
    );
}

export default Images;

