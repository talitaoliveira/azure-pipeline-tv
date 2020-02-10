const axios = require("axios");

export const getDataFromURL = async url => {
  try {
    const { data } = await axios.get(url);
    const svgResponse = data;

    return svgResponse.includes("succeed");
  } catch (error) {
    console.error(error);
  }
};
