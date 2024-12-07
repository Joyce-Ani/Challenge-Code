const { JSDOM } = require("jsdom"); // Import JSDOM to simulate DOM
import('node-fetch')
  .then(module => {
    const fetch = module.default; 
    // Use the fetch function here
  })
  .catch(error => {
    console.error('Error importing node-fetch:', error);
  }); // Import fetch for making API calls

const accessKey = "XzqM8IYmqs0LPfaXHngypZsbm-3db7yueOqDw6a4eEI";

// Simulate a DOM environment
const dom = new JSDOM(`
<!DOCTYPE html>
<html>
  <body>
    <form id="search-form">
      <input id="search-box" type="text" />
      <button type="submit">Search</button>
    </form>
    <div id="search-result"></div>
    <button id="show">Show More</button>
  </body>
</html>
`);

// Access the simulated DOM elements
const document = dom.window.document;
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showBtn = document.getElementById("show");

let keyword = "";
let page = 1;

// Function to fetch images from Unsplash API
async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Log results or update the simulated DOM
    console.log("Results:", data);
    searchResult.textContent = JSON.stringify(data, null, 2); // Display results in the simulated DOM
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Add an event listener to simulate form submission
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

// Simulate a user entering a search term and submitting the form
searchBox.value = "office";
searchForm.dispatchEvent(new dom.window.Event("submit"));


 