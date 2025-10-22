import Axios from "axios";
const base_url = "https://vehicle.grummanholdings.com/";

export const axios = Axios.create({
  baseURL: base_url,
});
