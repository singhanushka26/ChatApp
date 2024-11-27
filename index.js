import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;
 
try {
    mongoose.connect(URI);
    console.log('Connected to MongoDB');
} catch (error) {
    console.log(error);
}

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})