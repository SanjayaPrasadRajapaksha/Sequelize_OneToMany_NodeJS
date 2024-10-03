import express from "express";
import ownerController from "../Controllers/owner.controller.js";

const router = express.Router();

// Create a new owner with pets
router.post("/ownerPets", ownerController.createOwnerWithPets);

// Create a new owner without pets
router.post("/owner", ownerController.createOwner);

// Get a specific owner by ID with their pets
router.get("/owner/:id", ownerController.getOwnerWithPets);

// Get all owners
router.get("/owners", ownerController.getAllOwners);

// Update an owner by ID
router.put("/owner/:id", ownerController.updateOwner);

// Delete an owner by ID
router.delete("/owner/:id", ownerController.deleteOwner);

export default router;
