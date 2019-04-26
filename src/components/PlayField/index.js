import React, { Component } from "react";
import Squares from "../Squares";
import Row from '../Row';
import Col from '../Col';
import Data from "../../data.json";
import Button from "../Button";
import "./style.css";

class PlayField extends Component {

    state = {
        score: 0,
        win: 0,
        loss: 0,
        new: false,
        randomArr: Data
    }

    // resets the game
    reset = () => {
        this.setState({
            new: true
        })
        this.randomize(Data);
    }

    componentDidMount() {
        this.randomize(Data);
    }

    // shuffles the order of the data array from data.json
    // this function is only called when game is restarted
    randomize = array => {
        let newArr = array;
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        console.log("shuffles image orders");
        this.setState({
            randomArr: newArr
        })
    }

    // increment win if all guessed correctly
    victory = () => {
        console.log("win");
        this.setState({
            // new: true,
            win: this.state.win + 1,
            score: 0
        })
        this.reset();
    }

    // increment loss if guess incorrectly
    defeat = () => {
        console.log("loss");
        this.setState({
            // new: true,
            loss: this.state.loss + 1,
            score: 0
        })
        this.reset();
    }

    increment = () => {
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

    // once the user clicks an image div. Check if they have guessed correctly
    // correct is when clicked state is false on the image that was clicked.
    checkGuess = isClicked => {
        if (isClicked) {
            this.defeat()
        } else {
            this.increment()
        }
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
                                        onClick={this.checkGuess} 
                                        url = {element.url} 
                                        src = {element.src} 
                                        alt = {element.alt}
                                        new = {this.state.new}
                                    />
                                );
                            })
                        }
                    </Col>
                </Row>
                <Row>
                    <Button onClick={this.randomize}>Click me to restart!</Button>
                </Row>
            </div>  
        );
    }
}

export default PlayField;