
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
