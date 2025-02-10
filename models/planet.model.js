const mongoose = require('mongoose');

const PlanetSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);


const Planet = mongoose.model("planetData", PlanetSchema);
module.exports = Planet;