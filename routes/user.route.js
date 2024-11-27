import express from "express"
import {
    signup,
  } from "../controller/user.controller.js";
  import secureRoute from "../middleware/secureRoute.js";
  const router = express.Router();
   
  router.post("/signup", signup);
  
  export default router;