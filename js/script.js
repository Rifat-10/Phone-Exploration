
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
    const searchText = document.getElementById("search-input").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(response => response.json())
    .then(data =>showPhoneDetails(data.data));
};
const showPhoneDetails = (data) =>{
  for(const phone of data){
    const parent=document.getElementById("phone-container");

    const div= document.createElement("div");
    div.innerHTML =`<div class="card border p-5">
    <div class="pro-pic ">
        <img class="w-25" src="${phone.image}" alt="">
    </div>
    <h2>Name: ${phone.phone_name} </h2>
    <h2>Brand Name: ${phone.brand} </h2>
    <div class="button2">
        <button onclick="details()" class="btn-success details">Details</button>
    </div>
</div>`;
parent.appendChild(div);
  }
};

const details =() =>{
    
}