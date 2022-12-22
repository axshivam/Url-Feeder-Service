// Testing of fetch api

const fetch = require("node-fetch");

const fetchingData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/axshivam");
    
    console.log('Ok ==>> ', response.ok);
    console.log('Status ==>> ', response.status);
    console.log('Status Text ==>> ', response.statusText);
    console.log('Headers Raw ==>> ', response.headers.raw());
    console.log('Content Type ==>> ', response.headers.get("content-type"));
  } catch (err) {
    console.log(`Error: `, err);
  }
};

fetchingData();

// fetch('https://quotes.toscrape.com/random')
//     .then((response) => response.text())
//     .then((body) => {
//         console.log(body);
//     });
