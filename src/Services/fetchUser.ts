import { USERS } from "../Constants/API";
import { getAPI } from "./APISchema";

export const fetchAlluser = async () => {
    const users = getAPI(USERS);
    return users;
}
