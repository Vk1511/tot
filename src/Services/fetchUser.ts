import { USERS } from "../Constants/API";
import axios from "axios";

export const fetchAlluser = async () => {
    const apidata = await axios.get(USERS)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        return error.message;
    })
    return apidata;
}