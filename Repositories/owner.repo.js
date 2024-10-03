import db from "../Models/index.js";
const { Owner, Pet } = db;

// Create a new owner with associated pets
export const createOwnerWithPets = async (ownerData, petsData) => {
    try {
        const owner = await Owner.create(ownerData);
        for (let petData of petsData) {
            await Pet.create({
                ...petData,
                ownerId: owner.id,
            });
        }
        return owner;
    } catch (error) {
        console.error("Error creating owner with pets:", error);
        throw new Error("Failed to create owner with pets");
    }
};

// Create an owner without pets
export const createOwner = async (ownerData) => {
    try {
        return await Owner.create({
            name: ownerData.name,
            address: ownerData.address,
        });
    } catch (error) {
        console.error("Error creating owner:", error);
        throw new Error("Failed to create owner");
    }
};

// Get a single owner with their pets
export const getOwnerWithPets = async (ownerId) => {
    try {
        return await Owner.findOne({
            where: { id: ownerId },
            include: [{ model: Pet, as: "pet" }],
        });
    } catch (error) {
        console.error("Error getting owner with pets:", error);
        throw new Error("Failed to get owner with pets");
    }
};

// Get all owners (without pets)
export const getAllOwners = async () => {
    try {
        return await Owner.findAll();
    } catch (error) {
        console.error("Error getting all owners:", error);
        throw new Error("Failed to get all owners");
    }
};

// Update an owner by ID
export const updateOwner = async (ownerId, ownerData) => {
    try {
        return await Owner.update(ownerData, {
            where: { id: ownerId },
        });
    } catch (error) {
        console.error("Error updating owner:", error);
        throw new Error("Failed to update owner");
    }
};

// Delete an owner and their associated pets by ID
export const deleteOwner = async (ownerId) => {
    try {
        return await Owner.destroy({
            where: { id: ownerId },
        });
    } catch (error) {
        console.error("Error deleting owner:", error);
        throw new Error("Failed to delete owner");
    }
};
