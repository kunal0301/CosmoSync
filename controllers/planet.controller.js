const Planet = require('../models/planet.model');
const Planets = require('../models/planet.model');

const getPlanet = async(req, res) => {
    try{
        const planets = await Planets.find({});
        res.status(200).json(planets);
    }
    catch (error) {
        res.status(500).json({message: "Some error occored" + error.message});
    }
}

const getSinglePlanet = async(req, res) =>{
    try{
        const {id} = req.params;
        const planet = await Planets.find({name: id});

        if (!planet){
            return res.status(404).json({ message: "Planet Not Found" });
        }
        res.status(200).json(planet);
    }
    catch (error){
        res.status(500).json({message: "Some error occoured"+error.message});
    }
}

module.exports = {
    getPlanet,
    getSinglePlanet
};