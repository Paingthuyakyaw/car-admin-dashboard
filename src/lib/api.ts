import Axios from "axios";

export const axios = Axios.create({
  baseURL: "",
});

export const authToken = (form?: boolean) => {
  return {
    "Content-type": form ? " multipart/form-data" : "application/json",
    Accept: "application/json",
    Authorization: `Bearer `,
  };
};
