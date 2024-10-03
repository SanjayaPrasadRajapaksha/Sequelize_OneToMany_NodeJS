import petService from "../Services/pet.service.js";

// Create a new pet
const createPet = async (req, res) => {
    try {
        const { name, type, ownerId } = req.body;
        const result = await petService.createPet({ name, type, ownerId });
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get a pet by ID
const getPet = async (req, res) => {
    try {
        const pet = await petService.getPet(req.params.id);
        if (!pet) {
            return res.status(404).send({ message: "Pet not found" });
        }
        res.status(200).send(pet);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Update a pet by ID
const updatePet = async (req, res) => {
    try {
        const updatedPet = await petService.updatePet(req.params.id, req.body);
        if (!updatedPet) {
            return res.status(404).send({ message: "Pet not found" });
        }
        res.status(200).send(updatedPet);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete a pet by ID
const deletePet = async (req, res) => {
    try {
        const result = await petService.deletePet(req.params.id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get all pets
const getAllPets = async (req, res) => {
    try {
        const pets = await petService.getAllPets();
        res.status(200).send(pets);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export default {
    createPet,
    getPet,
    updatePet,
    deletePet,
    getAllPets
};
