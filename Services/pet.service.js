import * as petRepository from "../Repositories/pet.repo.js"; // Import the repository

// Create a new pet
const createPet = async (petsData) => {
    return await petRepository.createPet(petsData);
};

// Get a pet by ID
const getPet = async (petId) => {
    return await petRepository.getPet(petId);
};

// Update a pet by ID
const updatePet = async (petId, updatedData) => {
    return await petRepository.updatePet(petId, updatedData);
};

// Delete a pet by ID
const deletePet = async (petId) => {
    return await petRepository.deletePet(petId);
};

// Get all pets
const getAllPets = async () => {
    return await petRepository.getAllPets();
};

// Default export the object containing the functions
export default {
    createPet,
    getPet,
    updatePet,
    deletePet,
    getAllPets
};
