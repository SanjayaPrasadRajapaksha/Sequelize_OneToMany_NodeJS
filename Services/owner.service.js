import * as ownerRepository from "../Repositories/owner.repo.js";

const createOwnerWithPets = async (ownerData, petsData) => {
    return await ownerRepository.createOwnerWithPets(ownerData, petsData);
};

const createOwner = async (ownerData) => {
    return await ownerRepository.createOwner(ownerData);
};

const getOwnerWithPets = async (ownerId) => {
    return await ownerRepository.getOwnerWithPets(ownerId);
};

const getAllOwners = async () => {
    return await ownerRepository.getAllOwners();
};

const updateOwner = async (ownerId, ownerData) => {
    return await ownerRepository.updateOwner(ownerId, ownerData);
};

const deleteOwner = async (ownerId) => {
    return await ownerRepository.deleteOwner(ownerId);
};

export default {
    createOwnerWithPets,
    createOwner,
    getOwnerWithPets,
    getAllOwners,
    updateOwner,
    deleteOwner
};
