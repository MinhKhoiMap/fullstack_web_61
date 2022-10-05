import mongoose from "mongoose";
import userSchema from "../schemas/usersSchema";

class userModel {
    constructor() {
        this.users = mongoose.model('users', userSchema);
    }

    getAllUsers() {
        
    }
}

export default userModel;

