import express from "express"; // Assuming you're using ES6 imports
import bodyParser from "body-parser";
import cors from "cors"; // Import cors for CORS handling
import db from "./Models/index.js";
import ownerRoutes from "./Routes/owner.route.js";
import petRoutes from "./Routes/pet.route.js";

const app = express();

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.use("/api", ownerRoutes);
app.use("/api", petRoutes);

// Sync database
db.sequelize.sync().then(() => {
  console.log("Database synced.");
}).catch(err => {
  console.error("Failed to sync database:", err);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
