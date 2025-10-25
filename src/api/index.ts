import Axios from "axios";
const base_url = "https://vehicle.grummanholdings.com/api/v1/"; //
export const auth_url = "https://api.v3.grummanholdings.com/api/v1/"; //

export const axios = Axios.create({
  baseURL: base_url,
});

export const authJsonToken = (file?: boolean) => {
  // local storage ကနေ token ကိုယူမယ်
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Accept: file ? "multipart/form-data" : "application/json",
    // authorization header ထဲမှာ token ကိုထည့်မယ်
    Authorization: `Bearer ${token}`,
  };
};
