import React from 'react';
import './Business.css';

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
            <div className="image-container">
                <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
            </div>
            <h2>{this.props.busData.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                <p>{this.props.busData.address}</p>
                <p>{this.props.busData.city}</p>
                <p>{this.props.busData.state} {this.props.busData.zipCode}</p>
                </div>
                <div className="Business-reviews">
                <h3>{this.props.busData.category}</h3>
                <p> {this.props.index}</p>
                <h3 className="rating">{this.props.busData.rating} stars</h3>
                <p> {this.props.greeting}</p>
                <p>{this.props.busData.reviewCount} reviews</p>
                </div>
            </div>
            </div>
        )
    }
};

export default Business;