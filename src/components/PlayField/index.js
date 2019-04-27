import React, { Component } from "react";
import Squares from "../Squares";
import Row from '../Row';
import Col from '../Col';
import Data from "../../data.json";
import "./style.css";

class PlayField extends Component {

    state = {
        score: 0,
        win: 0,
        loss: 0,
        randomArr: Data,
        clicked: []
    }

    // resets the game
    reset = () => {
        this.setState({
            score: 0,
            randomArr: Data,
            clicked: []
        });
        this.randomize(Data);
    }

    componentDidMount() {
        this.randomize(Data);
    }

    // shuffles the order of the data array from data.json
    // this function is only called when game is restarted
    randomize = array => {
        console.log("shuffles image orders");
        let newArr = array;
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        this.setState({
            randomArr: newArr
        })
    }

    // once the user clicks an image div. Check if they have guessed correctly
    // correct guesses won't have their id in the clicked array
    handleClick = id => {
        console.log("clicked")
        
        if (this.state.clicked.indexOf(id) === -1) {
            this.increment();
            this.setState({ 
                clicked: this.state.clicked.concat(id) 
            });
        } else {
            this.defeat();
        }
          console.log(this.state.clicked);
        console.log("handleclick squares");
    }

    // increment win if all guessed correctly
    victory = () => {
        console.log("win");
        this.setState({
            win: this.state.win + 1,
            score: 0
        })
        this.reset();
    }

    // increment loss if guess incorrectly
    defeat = () => {
        console.log("loss");
        this.setState({
            loss: this.state.loss + 1,
            score: 0
        })
        this.reset();
    }

    increment = () => {
        console.log("increment");
        // if all have been guessed correctly
        this.setState({
            score: this.state.score + 1
        })
        // if all images have been clicked no more than once player wins
        if (this.state.score === 11) {
            this.victory();
        }
        this.randomize(Data);
    }


    render() {
        return (
            <div className="playfield">
                <div>
                    <h3>Current Score: {this.state.score} Wins: {this.state.win} Losses: {this.state.loss}</h3>
                </div>
                
                <Row>
                    <Col className="d-flex justify-content-around flex-wrap" size="6">
                        {
                            /* Iterate through the randomized data.json array and rendering image divs */
                            this.state.randomArr.map((element, i) => {
                                return (
                                    <Squares 
                                        key = {i}
                                        handleClick={this.handleClick}
                                        id = {element.id} 
                                        src = {element.src} 
                                        alt = {element.alt}
                                    />
                                );
                            })
                        }
                    </Col>
                </Row>
            </div>  
        );
    }
}

export default PlayField;