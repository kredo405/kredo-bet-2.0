let getMatches = (arrLeague) => {
// получаем все матчи на сегодняшний день
const date = new Date(),
      year = date.getFullYear(),
      mounth = date.getMonth(),
      day = date.getDate();

let mounthNew = '0',
    dayNew = '0';

if(day < 10) {
    dayNew = dayNew + String(day)
} else {
    dayNew = day;
}    

if(mounth < 10) {
    mounthNew = mounthNew + String(mounth)
} else {
    mounthNew = mounth;
}

const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {date: `${year}-${mounthNew}-${dayNew}`},
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);

      let {response: allMatches} = response.data;

      

  }).catch(function (error) {
      console.error(error);
  });
}

export default getMatches;