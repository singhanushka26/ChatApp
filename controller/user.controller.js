import error from "mongoose/lib/error/index.js";
import bcrypt from "bcrypt.js";
import User from "../models/user.model.js";
import { object } from "mongoose/lib/utils.js";

export const signup=(req,res)=>{
    const {fullname,email,confirmpassword}=req.body;
    try {
        if(password!==confirmpassword){
            return res.status(400).json({error:"Password and confirm password do not match"})
        }

        // Hashing the password
        // const hashPassword = await bcrypt.hash(password, 10);
        // const newUser = await new User({
        // fullname,
        // email,
        // password: hashPassword,
        // });

        const user=User.findOne({email})
        if(user){
            return res.status(400).json({error:"Email already exists"})
        }
        
        const newUser = new User({
          fullname,
          email,
          password,
        })
        newUser.save();
       
        res.status(201).json({message:"User created successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
}