import { ALBUM_BASED_ON_ID } from "../Constants/API";
import { getAPI } from "./APISchema";

export const fetchAllAlbums = async (id:number) => {
    const url = ALBUM_BASED_ON_ID(id)
    const allAlbums = getAPI(url);
    return allAlbums;
}