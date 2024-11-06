document.addEventListener("DOMContentLoaded", function () {
    // Simulated property data from a database
    const properties = [
        { 
            imgSrc: "./hero_image.jpg", 
            title: "Luxury Villa", 
            location: "Los Angeles, CA", 
            description: "A beautiful villa with modern amenities and stunning views.", 
            price: "$20,000/month" 
        },
        { 
            imgSrc: "./hero_image.jpg", 
            title: "City Apartment", 
            location: "New York, NY", 
            description: "A cozy apartment located in the heart of the city.", 
            price: "$3,000/month" 
        },
        { 
            imgSrc: "./hero_image.jpg", 
            title: "Beach House", 
            location: "Miami, FL", 
            description: "A luxurious beach house with private access to the ocean.", 
            price: "$15,000/month" 
        },
        { 
            imgSrc: "./hero_image.jpg", 
            title: "Luxury Villa", 
            location: "Los Angeles, CA", 
            description: "A beautiful villa with modern amenities and stunning views.", 
            price: "$20,000/month" 
        },
        { 
            imgSrc: "./hero_image.jpg", 
            title: "City Apartment", 
            location: "New York, NY", 
            description: "A cozy apartment located in the heart of the city.", 
            price: "$3,000/month" 
        },
        { 
            imgSrc: "./hero_image.jpg", 
            title: "Beach House", 
            location: "Miami, FL", 
            description: "A luxurious beach house with private access to the ocean.", 
            price: "$15,000/month" 
        },
        { 
            imgSrc: "./hero_image.jpg", 
            title: "Luxury Villa", 
            location: "Los Angeles, CA", 
            description: "A beautiful villa with modern amenities and stunning views.", 
            price: "$20,000/month" 
        },
        { 
            imgSrc: "./hero_image.jpg", 
            title: "City Apartment", 
            location: "New York, NY", 
            description: "A cozy apartment located in the heart of the city.", 
            price: "$3,000/month" 
        },
        { 
            imgSrc: "./hero_image.jpg", 
            title: "Beach House", 
            location: "Miami, FL", 
            description: "A luxurious beach house with private access to the ocean.", 
            price: "$15,000/month" 
        },
        { 
            imgSrc: "./hero_image.jpg", 
            title: "Luxury Villa", 
            location: "Los Angeles, CA", 
            description: "A beautiful villa with modern amenities and stunning views.", 
            price: "$20,000/month" 
        },
        { 
            imgSrc: "./hero_image.jpg", 
            title: "City Apartment", 
            location: "New York, NY", 
            description: "A cozy apartment located in the heart of the city.", 
            price: "$3,000/month" 
        },
        { 
            imgSrc: "./hero_image.jpg", 
            title: "Beach House", 
            location: "Miami, FL", 
            description: "A luxurious beach house with private access to the ocean.", 
            price: "$15,000/month" 
        },
        // Add more properties as needed
    ];

    // Reference to the property container
    const propertyContainer = document.getElementById("property-container");

    // Generate property cards dynamically
    properties.forEach(property => {
        const card = document.createElement("div");
        card.classList.add("prop-card");

        card.innerHTML = `
            <img src="${property.imgSrc}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>${property.location}</p>
            <p>${property.description}</p>
            <h5>${property.price}</h5>
        `;

        propertyContainer.appendChild(card);
    });
});
