import Sequelize from "sequelize";
import dbConfig from "../Configs/db.config.js";
import initOwnerModel from "./owner.model.js";
import initPetModel from "./pet.model.js";    

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PASSWORD, {
    host: dbConfig.DB_HOST,  
    dialect: dbConfig.DIALECT,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Initialize models
db.Owner = initOwnerModel(sequelize, Sequelize); 
db.Pet = initPetModel(sequelize, Sequelize);    

// Define the one-to-many relationship with cascade options
db.Owner.hasMany(db.Pet, {
    foreignKey: "ownerId",   // Foreign key in the Pet table
    as: "pet",
   // onDelete: "CASCADE",     // Deletes all pets associated with the owner when the owner is deleted
   // onUpdate: "CASCADE",     // Updates ownerId in pets when the owner ID changes
});
db.Pet.belongsTo(db.Owner, {
    foreignKey: "ownerId",   // Foreign key in the Pet table
    as: "owner",
    onDelete: "CASCADE",     // Ensures that if a pet is deleted, it will also remove the reference to the owner
    onUpdate: "CASCADE",     // Updates ownerId in pets when the owner ID changes
});

export default db;
