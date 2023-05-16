// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:3333",
//   timeout: 15000,
// });

const baseURL: string = "http://localhost:3333";

export const requestSectors = async () => {
  try {
    const response = await fetch(`${baseURL}/categories/readAll`);
    return response.json();
  } catch (e) {
    console.log(e);
    throw new Error("Failed");
  }
};

export const requestCompanies = async () => {
  try {
    const response = await fetch(`${baseURL}/companies/readAll`);
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error("Failed");
  }
};
