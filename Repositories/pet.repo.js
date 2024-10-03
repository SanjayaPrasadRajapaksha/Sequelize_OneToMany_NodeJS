import db from "../Models/index.js";
const { Pet } = db;

// Create a new pet
export const createPet = async (petsData) => {
    try {
        const pet = await Pet.create(petsData);
        return pet;
    } catch (error) {
        throw new Error(`Error creating pet: ${error.message}`);
    }
};

// Get a pet by ID
export const getPet = async (petId) => {
    try {
        return await Pet.findOne({
            where: { id: petId },
            include: [{ model: db.Owner, as: "owner" }], // Include the associated owner
        });
    } catch (error) {
        throw new Error(`Error fetching pet: ${error.message}`);
    }
};

// Update a pet by ID
export const updatePet = async (petId, updatedData) => {
    try {
        const [updated] = await Pet.update(updatedData, {
            where: { id: petId },
        });

        if (updated) {
            return await Pet.findOne({ where: { id: petId } });
        }
        throw new Error("Pet not found");
    } catch (error) {
        throw new Error(`Error updating pet: ${error.message}`);
    }
};

// Delete a pet by ID
export const deletePet = async (petId) => {
    try {
        const deleted = await Pet.destroy({
            where: { id: petId },
        });

        if (deleted) {
            return { message: "Pet deleted successfully" };
        }
        throw new Error("Pet not found");
    } catch (error) {
        throw new Error(`Error deleting pet: ${error.message}`);
    }
};

// Get all pets
export const getAllPets = async () => {
    try {
        return await Pet.findAll({
            include: [{ model: db.Owner, as: "owner" }], // Include the associated owner
        });
    } catch (error) {
        throw new Error(`Error fetching pets: ${error.message}`);
    }
};
