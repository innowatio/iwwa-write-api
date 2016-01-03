import mongodb from "services/mongodb";

export default async function findElement (collection, _id) {
    const db = await mongodb;
    return db.collection(collection).findOne({_id});
}
