import express from "express";
import petController from "../Controllers/pet.controller.js";

const router = express.Router();

// Create a new pet
router.post("/pet", petController.createPet);

// Get a specific pet by ID
router.get("/pet/:id", petController.getPet);

// Update a pet by ID
router.put("/pet/:id", petController.updatePet);

// Delete a pet by ID
router.delete("/pet/:id", petController.deletePet);

// Get all pets
router.get("/pets", petController.getAllPets);

export default router;

