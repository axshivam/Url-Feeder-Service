const fetch = require("node-fetch");

const fetchingData = async (url) => {
  try {
    const response = await fetch(url);

    let fetched_details = [];
    fetched_details.push(response.ok);
    fetched_details.push(response.ok);
    fetched_details.push(response.status);
    fetched_details.push(response.statusText);
    fetched_details.push(response.headers.get("content-type"));

    return fetched_details;
  } catch (err) {
    console.log(`Error: `, err);
  }
};

module.exports = fetchingData;