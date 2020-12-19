import axios from "axios"

class EntryService {

    async createEntry(entryJson) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.post("http://localhost:8102/entries/save", entryJson, axiosConfig);
        return response.data;
    }

    async getUserEntries(userJson) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.post("http://localhost:8102/entries/userid", userJson, axiosConfig);
        return response.data;
    }

    async getEntry(userJson) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.post("http://localhost:8102/entries/id", userJson, axiosConfig);
        return response.data;
    }

}

export default new EntryService();