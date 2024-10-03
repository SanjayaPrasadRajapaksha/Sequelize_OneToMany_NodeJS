import ownerService from "../Services/owner.service.js";

// Create a new owner with pets
const createOwnerWithPets = async (req, res) => {
    try {
        const { ownerData, petsData } = req.body;
        const result = await ownerService.createOwnerWithPets(ownerData, petsData);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Create an owner without pets
const createOwner = async (req, res) => {
    try {
        const { name, address } = req.body;
        const result = await ownerService.createOwner({ name, address });
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: error.message });
    }
};

// Get an owner and their pets by ID
const getOwnerWithPets = async (req, res) => {
    try {
        const owner = await ownerService.getOwnerWithPets(req.params.id);
        res.status(200).send(owner);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get all owners with their pets
const getAllOwners = async (req, res) => {
    try {
        const owners = await ownerService.getAllOwners();
        res.status(200).send(owners);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Update an owner by ID
const updateOwner = async (req, res) => {
    try {
        const ownerData = req.body;
        const result = await ownerService.updateOwner(req.params.id, ownerData);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete an owner by ID
const deleteOwner = async (req, res) => {
    try {
        await ownerService.deleteOwner(req.params.id);
        res.status(200).send({ message: "Owner deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export default {
    createOwnerWithPets,
    createOwner,
    getOwnerWithPets,
    getAllOwners,
    updateOwner,
    deleteOwner
};
