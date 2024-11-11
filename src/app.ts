import express from "express";
import cors from "cors";
import { AllRouters } from "./routes";
const app = express();

// medelware
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Ni_Library server...");
});

// route 
app.use('/api', AllRouters)

export default app;
