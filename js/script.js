const allPhone = () => {
    const searchText = document.getElementById("search-input").value;
    const parent = document.getElementById("phone-container");
    parent.innerHTML = ""
    const parentnf = document.getElementById("not-found-container");
    parentnf.innerHTML = ""
    const parentdt = document.getElementById("details-container");
    parentdt.innerHTML = ""
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(response => response.json())
        .then(data => showPhone(data.data));
    const loadingBar = document.getElementById("loading")
    loadingBar.style.display = "block"
};

const showPhone = (data) => {
    const loadingBar = document.getElementById("loading")
    loadingBar.style.display = "none"

    if (data.length === 0) {
        const parent = document.getElementById("not-found-container");
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="bg-secondary card border p-5 shadow-lg p-3 mb-3 bg-body rounded">
            <p class="text-danger"><b>Your phone is not found</b></p>
        </div>
        `;
        parent.appendChild(div);
    }

    const limitedPhones = data.slice(0, 20);
    for (const phone of limitedPhones) {

        const parent = document.getElementById("phone-container");

        const div = document.createElement("div");
        div.innerHTML = `
        <div class="bg-secondary card border p-5 shadow-lg p-3 mb-3 bg-body rounded">
            <div class="pro-pic ">
                <img class="w-25 pb-4" src="${phone.image}" alt="">
            </div>
                     <h3><b> ${phone.phone_name} </b></h2>
                     <p>Brand Name: ${phone.brand} </p>
            <div class="button2">
                <button class="btn-success details w-25 rounded-pill" onclick="details('${phone.slug}')" >Details</button>
            </div>

        </div>`;
        parent.appendChild(div);
    }
};


const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showPhoneDetails(data.data));
};

const showPhoneDetails = (info) => {
    document.getElementById("details-container").innerHTML = `
    <div class="container bg-white  p-3 p-md-5 mx-auto border border-2">
        <div class="pro-pic w-100 d-flex justify-content-center align-items-center">
            <img class="pb-5 mx-auto" width="50%" src="${info.image}" alt="">
        </div>
        <div class="container text-break d-flex flex-column fs-6">
            <h1 class="pb-3">  ${info.name} </h1>
            <p><b>Release Date:</b> ${info.releaseDate ? info.releaseDate : "No release date found"}</p>
            <p><b>Id:</b> ${info.slug} </p>
            <h4>Main Features: </h4>
            <p><b>Chipset:</b> ${info.mainFeatures.chipSet} </p>
            <p><b>Displaysize:</b> ${info.mainFeatures.displaySize} </p>
            <p><b>Memory:</b> ${info.mainFeatures.memory} </p>
            <p><b>Sensors:</b> ${info.mainFeatures.sensors} </p>
            <p><b>Storage:</b> ${info.mainFeatures.storage} </p>
            <h4>Others Information: </h4>
            <p><b>Bluetooth:</b> ${info.others.Bluetooth} </p>
            <p><b>Gps:</b> ${info.others.GPS} </p>
            <p><b>Nfc:</b> ${info.others.NFC} </p>
            <p><b>Radio:</b> ${info.others.Radio} </p>
            <p><b>USB:</b> ${info.others.USB} </p>
            <p><b>WLAN:</b> ${info.others.WLAN} </p>
            </div>

     </div>
`
};
