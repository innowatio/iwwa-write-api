import {createHash} from "crypto";

export default function hashToken (loginToken) {
    return createHash("sha256").update(loginToken).digest("base64");
}
