let firstDayAddress = document.getElementById('firstDayAddress');
let firstDayTemp_c = document.getElementById('firstDayTemp_c');
let firstDayIcon = document.getElementById('firstDayIcon');
let firstDaySunny = document.getElementById('firstDaySunny');
let firstDayHumidity = document.getElementById('firstDayHumidity');
let firstDayWind_kph = document.getElementById('firstDayWind_kph');
let firstDayWind_dir = document.getElementById('firstDayWind_dir');
let nextDataMaxTemp_c = document.getElementById('nextDataMaxTemp_c');
let nextDataIcon = document.getElementById('nextDataIcon');
let nextDataMinTemp_c = document.getElementById('nextDataMinTemp_c');
let nextDataMinSunny = document.getElementById('nextDataMinSunny');
let lastDataIcon = document.getElementById('lastDataIcon');
let lastDataMaxTemp_c = document.getElementById('lastDataMaxTemp_c');
let lastDataMinTemp_c = document.getElementById('lastDataMinTemp_c');
let lastDataSunny = document.getElementById('lastDataSunny');
let inputLocation = document.getElementById('inputLocation');
let firstDayName = document.getElementById('firstDayName');
let firstDay = document.getElementById('firstDay');
let firstDayDate = document.getElementById('firstDayDate');
let nextDataDay = document.getElementById('nextDataDay');
let lastDataDay = document.getElementById('lastDataDay');


// async function getDataApi(meals = 'cairo'){
//     let https = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=007a6ff2effb483998d94316231008&q=${meals}&days=3`);
//     let response = await https.json();
//     return response
// }


// function displayFirstDay(data){
//     let toDayDate = new Date()
//     firstDayDate.innerHTML = toDayDate.getDate()
//     firstDayName.innerHTML = toDayDate.toLocaleDateString("en-us",{weekday:"long"})
//     firstDay.innerHTML = toDayDate.toLocaleDateString("en-us",{month:"long"})
//     firstDayAddress.innerHTML = data.location.name
//     firstDayTemp_c.innerHTML = data.current.temp_c+'oC'
//     firstDayIcon.setAttribute("src",data.current.condition.icon)
//     firstDaySunny.innerHTML = data.current.condition.text
//     firstDayHumidity.innerHTML = data.current.humidity+' %'
//     firstDayWind_kph.innerHTML = data.current.wind_kph+' km/h'
//     firstDayWind_dir.innerHTML = data.current.wind_dir+' km/h'
// }   

// function displayNextData(data){
//     let toDayDate = new Date(data.forecast.forecastday[1].date)
//     nextDataDay.innerHTML = toDayDate.toLocaleDateString("en-us",{weekday:"long"})
//     nextDataIcon.setAttribute('src',data.forecast.forecastday[1].day.condition.icon)
//     nextDataMaxTemp_c.innerHTML = data.forecast.forecastday[1].day.maxtemp_c+'oC'
//     nextDataMinTemp_c.innerHTML = data.forecast.forecastday[1].day.mintemp_c+'o'
//     nextDataMinSunny.innerHTML = data.forecast.forecastday[1].day.condition.text
// }

// function displayLastDay(data){ 
//     let toDayDate = new Date(data.forecast.forecastday[2].date)
//     lastDataDay.innerHTML = toDayDate.toLocaleDateString("en-us",{weekday:"long"})
//     lastDataIcon.setAttribute('src',data.forecast.forecastday[2].day.condition.icon)
//     lastDataMaxTemp_c.innerHTML = data.forecast.forecastday[2].day.maxtemp_c+'oC'
//     lastDataMinTemp_c.innerHTML = data.forecast.forecastday[2].day.mintemp_c+'o'
//     lastDataSunny.innerHTML = data.forecast.forecastday[2].day.condition.text
// }

// async function data(city){
//     let weatherDate = await getDataApi(city);
//     displayFirstDay(weatherDate)
//     displayNextData(weatherDate)
//     displayLastDay(weatherDate)
// }
// data()

// inputLocation.addEventListener('input' , function(){
//     data(inputLocation.value)
// })

let dataApi = {}

async function getDataApi(meals = 'cairo'){
    let https = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=007a6ff2effb483998d94316231008&q=${meals}&days=3`);
    let response = await https.json();
    dataApi = response
    displayFirstDay()
    displayNextData()
    displayLastDay()
}
getDataApi()

function displayFirstDay(){
    let toDayDate = new Date()
    firstDayDate.innerHTML = toDayDate.getDate()
    firstDayName.innerHTML = toDayDate.toLocaleDateString("en-us",{weekday:"long"})
    firstDay.innerHTML = toDayDate.toLocaleDateString("en-us",{month:"long"})
    firstDayAddress.innerHTML = dataApi.location.name
    firstDayTemp_c.innerHTML = dataApi.current.temp_c+'oC'
    firstDayIcon.setAttribute("src",dataApi.current.condition.icon)
    firstDaySunny.innerHTML = dataApi.current.condition.text
    firstDayHumidity.innerHTML = dataApi.current.humidity+' %'
    firstDayWind_kph.innerHTML = dataApi.current.wind_kph+' km/h'
    firstDayWind_dir.innerHTML = dataApi.current.wind_dir+' km/h'
}   

function displayNextData(){
    let toDayDate = new Date(dataApi.forecast.forecastday[1].date)
    nextDataDay.innerHTML = toDayDate.toLocaleDateString("en-us",{weekday:"long"})
    nextDataIcon.setAttribute('src',dataApi.forecast.forecastday[1].day.condition.icon)
    nextDataMaxTemp_c.innerHTML = dataApi.forecast.forecastday[1].day.maxtemp_c+'oC'
    nextDataMinTemp_c.innerHTML = dataApi.forecast.forecastday[1].day.mintemp_c+'o'
    nextDataMinSunny.innerHTML = dataApi.forecast.forecastday[1].day.condition.text
}

function displayLastDay(){ 
    let toDayDate = new Date(dataApi.forecast.forecastday[2].date)
    lastDataDay.innerHTML = toDayDate.toLocaleDateString("en-us",{weekday:"long"})
    lastDataIcon.setAttribute('src',dataApi.forecast.forecastday[2].day.condition.icon)
    lastDataMaxTemp_c.innerHTML = dataApi.forecast.forecastday[2].day.maxtemp_c+'oC'
    lastDataMinTemp_c.innerHTML = dataApi.forecast.forecastday[2].day.mintemp_c+'o'
    lastDataSunny.innerHTML = dataApi.forecast.forecastday[2].day.condition.text
}

inputLocation.addEventListener('input' , function(){
    getDataApi(inputLocation.value)
})
