import axios from "axios";

export const getAPI = async (url:string) => {
    
    const apidata = await axios.get(url)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        return error.message;
    })
    return apidata;
}