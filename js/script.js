
const allPhone = () => {
    const searchText = document.getElementById("search-input").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(response => response.json())
        .then(data => showPhone(data.data));
};
const showPhone = (data) => {
    for (const phone of data) {
        const parent = document.getElementById("phone-container");

        const div = document.createElement("div");
        div.innerHTML = `<div class="bg-secondary card border p-5">
    <div class="pro-pic ">
        <img class="w-25" src="${phone.image}" alt="">
    </div>
    <h2>Name: ${phone.phone_name} </h2>
    <h2>Brand Name: ${phone.brand} </h2>
    <div class="button2">
        <button class="btn-success details" 
        onclick="details('${phone.slug}')"
        >Details</button>
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
    <div class="card border p-5 ">
        <div class="pro-pic ">
                <img class="w-25" src="${info.image}" alt="">
        </div>
        <div class="">
            <h4>Name: ${info.name} </h4>
            <h4>Release Date: ${info.releaseDate ? info.releaseDate : "No release date"}</h4>
            <h4>Id: ${info.slug} </h4>
            <h2>Main Features: </h2>
            <h4>Chipset: ${info.mainFeatures.chipSet} </h4>
            <h4>Displaysize: ${info.mainFeatures.displaySize} </h4>
            <h4>Memory: ${info.mainFeatures.memory} </h4>
            <h4>Sensors: ${info.mainFeatures.sensors} </h4>
            <h4>Storage: ${info.mainFeatures.storage} </h4>
            <h2>Others Information: </h2>
            <h4>Bluetooth: ${info.others.Bluetooth} </h4>
            <h4>Gps: ${info.others.GPS} </h4>
            <h4>Nfc: ${info.others.NFC} </h4>
            <h4>Radio: ${info.others.Radio} </h4>
            <h4>USB: ${info.others.USB} </h4>
            <h4>WLAN: ${info.others.WLAN} </h4>
            </div>

     </div>
`
};
