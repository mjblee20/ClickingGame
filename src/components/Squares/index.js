import React, { Component } from "react";
import Images from "../Images";
import "./style.css";


class Squares extends Component{
    state = {
        clicked: false
    }

    render() {
        return (
            <div className="squares" value={this.props.id} 
            onClick={() => this.props.handleClick(this.props.id)}>
                <h6>{this.props.id}</h6>
                <Images url={this.props.src} info={this.props.alt}/>
            </div>
        );
    }
}

export default Squares;


