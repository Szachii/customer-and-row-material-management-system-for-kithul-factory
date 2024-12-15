import bcrypt from 'bcrypt';

// Hash Password Function
export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(12); // Generate a salt
    const hashed = await bcrypt.hash(password, salt); // Hash the password
    return hashed;
  } catch (err) {
    throw new Error("Error hashing the password: " + err.message);
  }
};
  
export const comparePassword = async (password, hashed) => {
    try {
      return await bcrypt.compare(password, hashed); // Compare passwords
    } catch (err) {
      throw new Error("Error comparing passwords: " + err.message);
    }
};