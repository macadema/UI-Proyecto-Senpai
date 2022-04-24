import axios from "axios";

export const api = axios.create({
    baseURL: "http://locslhost:4000",
});