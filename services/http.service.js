import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api/" : "//localhost:5000/api/";

export const httpService = {
  get(endpoint, data) {
    return ajax(endpoint, "GET", data);
  },
};

async function ajax(endpoint = "flight", method = "GET", data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === "GET" ? data : null,
    });

    return res.data;
  } catch (err) {
    console.dir(err);
    throw err;
  }
}
