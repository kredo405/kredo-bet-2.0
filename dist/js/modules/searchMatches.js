function searchMatches() {
    let dateInput = document.querySelector('.search-matches__date'),
    btnView = document.querySelector('.search-matches__button'),
    coutnryList = document.querySelector('.search-matches__list-country'),
    leagueList = document.querySelector('.search-matches__list-league'),
    countryTogle = document.querySelector('.search-matches__btn-country'),
    leagueTogle = document.querySelector('.search-matches__btn-laegue'),
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
            li.innerHTML =`<a class='dropdown-item' href='#'><p class = 'dropdown-name'>${el.name}</p>
            <img src = '${el.flag}' class ='country-flag'></a>`;
            coutnryList.append(li);
            li.addEventListener('click', () => {
                countryTogle.innerHTML = `${el.name}`;
                getLeagues(countryTogle.innerHTML);
            });

        });
    }).catch(function (error) {
        console.error(error);
    });
}
    function getLeagues(country) {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            params: { country: `${country}` },
            headers: {
                'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0',
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            let message = document.querySelector('.dropdown-menu__message');
            let listLeagueArr = leagueList.querySelectorAll('li');
            listLeagueArr.forEach(el => {
                el.remove();
            })
            response.data.response.forEach((el) => {
                let li = document.createElement('li');
                li.innerHTML = `<a class='dropdown-item' href='#'><p class = 'dropdown-name'>${el.league.name}</p>
                <img src = '${el.league.logo}' class ='league-logo'></a>`;
                leagueList.append(li);
                li.addEventListener('click', () => {
                    leagueTogle.innerHTML = `${el.league.name}`;
                });
            });
            if(message != null) {
                message.remove();
            }
        }).catch(function (error) {
            console.error(error);
        });
}
getCountries();
}

export default searchMatches;

