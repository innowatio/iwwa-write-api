import mongodb from "services/mongodb";

export async function findUserByEmail (email) {
    const db = await mongodb;
    return db.collection("users").findOne({"emails.address": email});
}

export async function findUserById (userId) {
    const db = await mongodb;
    return db.collection("users").findOne({_id: userId});
}

export function getUserId (user) {
    return user._id;
}
