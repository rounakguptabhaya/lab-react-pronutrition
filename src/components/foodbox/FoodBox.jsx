import React, { Component } from 'react';
import './FoodBox.css';

export default class FoodBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            quantity: 1,
            food: this.props.food,
        }
    }

    handleInputChange = (e) => {
        this.setState({
          quantity: e.target.value
        });
    }
    
    render() {
        return (
            <div className="box">
                <article className="media">
                    <img className="image" src={this.props.food.image} alt={this.props.food.name}/>
                    <div className="media-content">
                        <div className="content">
                        <p>
                            <strong>{this.props.food.name}</strong> <br />
                            <small>{this.props.food.calories}</small>
                        </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <input
                        name="quantity"
                        className="input"
                        type="number" 
                        defaultValue="1"
                        onChange={this.handleInputChange}
                        />
                        <button className="button"  onClick={(e) => this.props.addFood(this.state, this.props.food)}>
                        +
                        </button>
                    </div>
                </article>
            </div>
        )
    }
}
