import React, { Component } from "react";
import Images from "../Images";
import "./style.css";


class Squares extends Component{
    state = {
        
        clicked: this.props.new
    }

    handleClick = () => {
        {   
            console.log("handleclick squares");
            let clicked = this.state.clicked ? false : true;
            this.setState({
                clicked: true
            });
            this.props.onClick(clicked);
        }
    }

    render() {
        return (
            <div className="squares" onClick={this.handleClick}>
                {console.log(this.props.new)}
                <h6>{this.props.url}</h6>
                <Images url={this.props.src} info={this.props.alt}/>
            </div>
        );
    }
}

export default Squares;


