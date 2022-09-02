import { PHOTOS_BASED_ON_ALBUM_ID } from "../Constants/API";
import { getAPI } from "./APISchema";

export const fetchPhotos = async (id:any) => {
    const url = PHOTOS_BASED_ON_ALBUM_ID(id)
    const photos = getAPI(url);
    return photos;
}