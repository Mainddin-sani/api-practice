
// get input function
function getId(id){
    return document.getElementById(id);
}

function loadData(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        var countries_Items = getId('country-head');
       for (let i = 0; i < data.length; i++) {
           let element = data[i];
           let country_items_parent = document.createElement('div');
           let country_name = document.createElement('h3');
           let capital_name = document.createElement('p');
           console.log(country_name, country_items_parent);
           country_items_parent.classList.add('country-items');
           countries_Items.appendChild(country_items_parent);
           country_items_parent.appendChild(country_name)
           country_items_parent.appendChild(capital_name)



           country_name.innerText = element['name'];
           capital_name.innerText = element['capital'];
        //    let capital_name = document.createElement('p');
       }
    })
}
loadData()





