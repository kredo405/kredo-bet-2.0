function searchMatches() {
    let dateInput = document.querySelector('.search-matches__date'),
    btnView = document.querySelector('.search-matches__button'),
    coutnryList = document.querySelector('.search-matches__list'),
    countryTogle = document.querySelector('.search-matches__btn-country'),
    leagueName,
    countryName;

// Получаем все страны
function getCountries() {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
        headers: {
            'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        response.data.response.forEach((el) => {
            let li = document.createElement('li');
            li.innerHTML =`<a class='dropdown-item' href='#'><p>${el.name}</p><img src = '${el.flag}' class ='country-flag'></a>`;
            coutnryList.append(li);
            li.addEventListener('click', () => {
                countryTogle.innerHTML = `${el.name}`
            });

        });
    }).catch(function (error) {
        console.error(error);
    });

}
getCountries();
}

export default searchMatches;

