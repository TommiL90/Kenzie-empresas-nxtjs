import { api } from "@/services/api";

export const requestSectors = async () => {
  try {
    const response = await api("/categories/readAll");
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error("Failed");
  }
};

export const requestCompanies = async () => {
    try {
      const response = await api("/companies/readAll");
  
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed");
    }
  };