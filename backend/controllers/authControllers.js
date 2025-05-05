import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';


export const signup = async(req,res) => {
    const {name, email, password} = req.body;

    const existing = await User.findOne({email});
    if(existing) return res.status(400).json({message: "User already exists"});


    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({name, email, password: hashedPassword});

    res.status(201).json({message: "User created successfully"});
}


export const login = async(req,res) =>{
    const {name, email, password} = req.body;

    const user = await User.findOne({email});
    if(!user) return res.status(400).json({message: "User does not exist"});

    const hashedPassword = await bcrypt.compare(password,user.password);
    if(!hashedPassword) return res.status(400).json({message : "Invalid Credentials"});

    const token = jwt.sign("email", process.env.JWT_SECRET, {expiresIn : "1d"});
    res.json({token});
    res.status(200).json({message: "Login successful"});
}