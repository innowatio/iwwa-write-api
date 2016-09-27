import mongodb from "services/mongodb";

export default async function findUser (collection, uid) {
    const db = await mongodb;
    return db.collection(collection).findOne({
        "services.sso.uid": uid
    });
}
