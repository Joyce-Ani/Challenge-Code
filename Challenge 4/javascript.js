const accessKey = "XzqM8IYmqs0LPfaXHngypZsbm-3db7yueOqDw6a4eEI";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showBtn = document.getElementById("show");

//https://api.unsplash.com/search/photos?page=1&query=office&client_id=XzqM8IYmqs0LPfaXHngypZsbm-3db7yueOqDw6a4eEI
let keyword="";
let page=1;

async function searchImages() {
    keyword = searchBox.value;
    const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}';

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}
   searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
   }) 