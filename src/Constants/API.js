export const BASE_URL = "https://jsonplaceholder.typicode.com/";

// USER END POINTS
export const USERS = BASE_URL + "users";

// ALBUM END POINTS
export const ALBUMS = BASE_URL + "albums";
export const ALBUM_BASED_ON_ID = (userId) => `${ALBUMS}?userId=${userId}`;

// PHOTOS END POINTS
export const PHOTOS = BASE_URL + "photos";
export const PHOTOS_BASED_ON_ALBUM_ID = (albumId) => `${PHOTOS}?albumId=${albumId}`; 