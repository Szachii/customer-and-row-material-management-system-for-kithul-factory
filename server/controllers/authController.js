import User from '../models/user.js'
import bcrypt, { compare } from 'bcrypt';


export const test = (req,res) => {
    res.json('test is working')
}

 
export const registerUser = async (req,res) => {
    try {
        const {name,username,mobile,password} = req.body;

        const ex = await User.findOne({username})

        if (ex) {
            return res.status(409).json({ error: 'Username is already taken' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            name,
            username,
            mobile,
            password: hashedPassword,
        })
        return res.json(user);
    } catch (error) {
        console.log('error in authcontroller')
        res.status(500).json({ error: 'Internal server error' });
    }
}


export const loginUser = async (req,res) => {
    try {
        const {username,password} = req.body;

        const user = await User.findOne({username});

        if (!user){
            return res.status(404).json({ error: 'Invalid username' });
        }

        const match = await bcrypt.compare(password, user.password);

        if(!match){
            return res.status(401).json({ error: 'Invalid password' });
        }

        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.log('error in authcontroller')
        return res.status(500).json({ error: 'Server error. Please try again later.' });
    }
}