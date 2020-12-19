import axios from "axios"

class UserService {


    async loginUser(json) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.post("http://localhost:8102/users/validate", json, axiosConfig);
        return response.data;
    }

    async registerUser(json) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.post("http://localhost:8102/users/save", json, axiosConfig);
        return response.data;
    }

}

export default new UserService();