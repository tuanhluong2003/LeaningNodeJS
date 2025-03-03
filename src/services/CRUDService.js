import bcrypt from "bcryptjs";
import db from '../models/index';
const salt = bcrypt.genSaltSync(10); //thuat toan duoc su dung de hash

let createNewUser = async (data) => {


    return new Promise(async (resolve, reject) => {
        try {
            let passwordHash = await hashUserPassword(data.password);
            await db.User.create({
                email: data.Email,
                password: data.password,
                firstName: data.FirstName,
                lastName: data.LastName,
                address: data.Address,
                phoneNumber: data.PhoneNumber,
                gender: data.Gender === '1' ? true : false,
                roleId: data.Role,
            });
            resolve("Create OK");
        } catch (e) {
            reject(e);
        }
    });

}


let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (e) {
            reject(e);
        }
    });

}
module.exports = {
    createNewUser: createNewUser,
}