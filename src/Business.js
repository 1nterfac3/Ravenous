import React from 'react';

const businessInfo = {
    imageSrc: "",
    name: "Sample Restaurant",
    address: "123 Main Street",
    city: "Port Harcourt",
    state: "Rivers State",
    zipCode: "zip",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90
}

const TestBusinessInfo = {
    imageSrc: "./images/A.jpg",
    alt: "restaurant",
    name: "Ikubie's Bole",
    address: "123 Testing Street",
    city: "Port Harcourt",
    state: "Rivers State",
    zipCode: "zip",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90
}

//Creating the Business Component.....
const Business = () => {
    return (
        <div className="Business">
            <div className="image-container">
                <img 
                src={TestBusinessInfo.imageSrc} 
                alt={TestBusinessInfo.alt} 
                />
            </div>
            <h2>{TestBusinessInfo.name}</h2>
            <div className="Business-Information">
                <div className='Business-address'>
                    <p>Address: {TestBusinessInfo.address}</p>
                    <p>City: {TestBusinessInfo.city}</p>
                    <p>State: {TestBusinessInfo.state}</p>
                </div>
                <div className='Business-review'>
                    <h2>Category</h2>
                    <h3 className='rating'>Rating: {TestBusinessInfo.rating} stars</h3>
                    <p>{TestBusinessInfo.reviewCount} Reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;