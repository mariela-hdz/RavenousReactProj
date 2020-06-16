import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

const businesses = [{
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
    },
    {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'CA',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
    }];
class BusinessList extends React.Component {
    render() {
        return (
        <div className="BusinessList">
            {/* {
                businesses.map((business, i) => <Business business = {business} greeting = "Hello" index={i}/>)
            } */}
            <Business busData = {businesses[0]} greeting = "Hi" index={0}/>
            <Business busData = {businesses[1]} greeting = "Hello" index={1}/>
         </div>
        )
    }
}
export default BusinessList;

// #why didn't we use curly brackets at the top
// import { Business } from '../Business/Business';????