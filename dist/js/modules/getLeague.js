import getMatches from './getMatches';

let getLeague = () => {
    // Получаем все лиги
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);

        let { response: arrLeagueAll } = response.data;
        // Фильтруем лиги и получаем массив с нужными лигами 
        let arrLeague = arrLeagueAll.filter((el) => {
            return(el.country.name != 'World' && el.league.type != 'Cup' &&
            el.seasons[el.seasons.length - 1].coverage.odds == true &&
            el.seasons[el.seasons.length - 1].coverage.predictions == true &&
            el.seasons[el.seasons.length - 1].coverage.standings == true);
        });
        getMatches(arrLeague);

    }).catch(function (error) {
        console.error(error);
    });
}

export default getLeague;