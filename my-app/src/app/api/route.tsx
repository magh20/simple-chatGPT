import axios from "axios";

const BaseUrl = "https://chatgpt-api.shn.hk/v1/";

export async function Post() {
    const response = await axios.post(`${BaseUrl}`, {
        
    }, { headers: { "Content-Type": "application/json" }, }
    );
}