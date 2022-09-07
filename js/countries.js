function loadCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data));
}
loadCountries();

function displayCountries(countries){
    // console.log(countries);
    // for(const country of countries){
    //     console.log(country);
    // }

    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h1>Country Name: ${country.name.common}</h1>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(div);
    });
}

const loadCountryDetails = (countryCode) =>{
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayCountryDetail(data[0]));
    // console.log('load country code: ', countryCode);
}

const displayCountryDetail = country => {
    console.log(country);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h2>${country.name.common} details</h2>
        <img src="${country.flags.png}">
    `
}
