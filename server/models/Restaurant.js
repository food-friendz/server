const mongoose = require('mongoose');

const { Schema } = mongoose;

const restaurantSchema = new Schema({

  "restaurants": [  
    {
      "name": "The Pasta House",
      "address": "123 Main Street, Cityville, USA",
      "phone": "555-123-4567",
      "email": "info@pastahouse.com"
    },
    {
      "name": "Spice Fusion",
      "address": "456 Elm Street, Townsville, USA",
      "phone": "555-234-5678",
      "email": "contact@spicefusion.com"
    },
    {
      "name": "La Pizzeria",
      "address": "789 Oak Avenue, Villageland, USA",
      "phone": "555-345-6789",
      "email": "hello@lapizzeria.com"
    },
    {
      "name": "Sushi Delight",
      "address": "321 Pine Road, Boroughville, USA",
      "phone": "555-456-7890",
      "email": "info@sushidelight.com"
    },
    {
      "name": "The Steakhouse",
      "address": "654 Cedar Lane, Hamletown, USA",
      "phone": "555-567-8901",
      "email": "contact@thesteakhouse.com"
    },
    {
      "name": "Taco Fiesta",
      "address": "987 Maple Drive, Villageville, USA",
      "phone": "555-678-9012",
      "email": "info@tacofiesta.com"
    },
    {
      "name": "Café Bistro",
      "address": "210 Walnut Street, Cityburg, USA",
      "phone": "555-789-0123",
      "email": "hello@cafebistro.com"
    },
    {
      "name": "Thai Paradise",
      "address": "543 Cherry Avenue, Townberg, USA",
      "phone": "555-890-1234",
      "email": "info@thaiparadise.com"
    }
  ]
}
);

const restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = restaurant;
