import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Adjust this based on your backend URL

export const getAllProperties = async () => {
  try {
    const response = await axios.get(`${API_URL}/properties`);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};

export const addProperty = async (propertyData) => {
  try {
    const response = await axios.post(`${API_URL}/properties`, propertyData);
    return response.data;
  } catch (error) {
    console.error('Error adding property:', error);
    return { message: 'Failed to add property' };
  }
};
