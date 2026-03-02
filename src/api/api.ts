import axios from "axios";

const API_URL = "http://localhost:5000/api/detect";

export const uploadSkinImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};

export const fetchScanHistory = async () => {
  const response = await axios.get(API_URL + "/history");
  return response.data;
};
