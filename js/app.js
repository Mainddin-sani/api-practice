
// get input function
function getId(id){
    return document.getElementById(id);
}

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>  displayCountries(data))

const displayCountries = countries => {
    console.log(countries);
var countries_Items = getId('country-head');
countries.forEach(element => {
    let CountryDiv = document.createElement('div');
    CountryDiv.className = 'col-6 col-lg-3 col-sm-6';
    
    let countryInfo = `
        <div class="country-items">
            <img src="${element.flag}">
            <h3>${element.name}</h3>
            <p>${element.capital}</p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="countryDisplay('${element.name}')">Details</button>
        </div>
    `
    CountryDiv.innerHTML = countryInfo;
    countries_Items.appendChild(CountryDiv);
});
}

const countryDisplay = name => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(data => {
        countryDetails(data[0]);
    })
}


const countryDetails = country => {
    console.log(country);
    const countryDetailsDiv = getId('modal_body');
    const details = `
        <img src="${country.flag}">
        <h4>${country.name}</h4>
        <p>${country.capital}</p>
        <p>Language: ${country.languages[0].nativeName}</p>
        <p>population: ${country.population}</p>
    `
    countryDetailsDiv.innerHTML = details;

}

// for (let i = 0; i < countries.length; i++) {
//     let element = countries[i];
//     let country_items_parent = document.createElement('div');
//     country_items_parent.classList.add('country-items');
//     const countriesInfo = `
//           <img src="${element.flag}">
//          <h3>${element.name}</h3>
//          <p>${element.capital}</p>
//      `
//          country_items_parent.innerHTML = countriesInfo;
//          countries_Items.appendChild(country_items_parent);
//              let country_name = document.createElement('h3');
//              let capital_name = document.createElement('p');
//              let flag = document.createElement('img');
    
    
    
//     country_items_parent.appendChild(flag);
//     country_items_parent.appendChild(country_name);
//     country_items_parent.appendChild(capital_name);


//     flag.src = element['flag'];
//     country_name.innerText = element['name'];
//     capital_name.innerText = element['capital'];

// }




