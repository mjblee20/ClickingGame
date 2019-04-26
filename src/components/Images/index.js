import React from "react";
import "./style.css";

function Images (props) {
    return (
        <img 
            src = {props.url}
            alt = {props.info}
        />
    );
}

export default Images;

