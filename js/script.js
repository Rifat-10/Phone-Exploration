
const dataLoadingBlock =() => {
    const getLoading = document.getElementById("loading");
    getLoading.style.display = "block";
    const getData = document.getElementById("data")
    getData.style.display = "none";
}


const dataLoadingNone =() => {
    const getLoading = document.getElementById("loading");
    getLoading.style.display = "none";
    const getData = document.getElementById("data")
    getData.style.display = "block";
}
const allPhone =() => {
    const searchValue = document.getElementById("search-input").value;
    const url = 'https://openapi.programming-hero.com/api/phones?search=${searchText}'
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));

    console.log(searchValue);
}