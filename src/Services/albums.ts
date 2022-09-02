import { ALBUMS, ALBUM_BASED_ON_ID } from "../Constants/API";
import axios from "axios";

export const fetchAllAlbums = async (id:number) => {
    const apidata = await axios.get(ALBUM_BASED_ON_ID(id))
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        return error.message;
    })
    return apidata;
}