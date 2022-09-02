import { PHOTOS_BASED_ON_ALBUM_ID } from "../Constants/API";
import axios from "axios";

export const fetchPhotos = async (id:any) => {
    const apidata = await axios.get(PHOTOS_BASED_ON_ALBUM_ID(id))
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        return error.message;
    })
    return apidata;
}