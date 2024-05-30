import React from "react";
import Business from "./Business"; //Importing Business Component

//Creating the business list
const BusinessList = () => {
    const businesses = [
        {
            imageSrc: 'https://via.placeholder.com/150',
            name: 'Restaurant A',
            address: '123 Main St',
            city: 'City A',
            state: 'State A',
            zipCode: '12345',
            category: 'Category A',
            rating: 4.5,
            reviewCount: 90
          },
          {
            imageSrc: 'https://via.placeholder.com/150',
            name: 'Restaurant B',
            address: '456 Side St',
            city: 'City B',
            state: 'State B',
            zipCode: '67890',
            category: 'Category B',
            rating: 4.0,
            reviewCount: 75
          },
          // Add more sample businesses if needed
        ];

        return (
            <div className="BusinessList">
                {businesses.map((business, index) => (
                   <Business key={index} business={business} /> 
                ))}
            </div>
        );
}


export default BusinessList; //Exporting Business List