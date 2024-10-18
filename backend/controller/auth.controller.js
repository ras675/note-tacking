import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res,next)=> {
    const {username, email, password} = req.body;

    const isValid = await User.findOne({email})

    if(isValid) {
        return next(errorHandler(400, 'Email already exists'));

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        
        res.status(201).json({
            success: true,
            message: 'User created successfully'
    })
} catch (error) {
    next(error);

}
};