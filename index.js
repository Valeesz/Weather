//1. find weather API уникальный API ключ
//2. Get access to DOM nodes
//3. Initialize event
//4. Make HTTP request
//5. Display data


//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=ff5bb55eb9953af92e31f3ea90e69482


//1. ff5bb55eb9953af92e31f3ea90e69482 - api openweather

//2.
const getElement = (id) => document.getElementById(id);
const humidity = getElement('current-humidity');
const pressure = getElement('current-pressure');
const temperature = getElement('current-temperature');
const windspeed = getElement('current-wind-speed');

const getWeatherButton = getElement('getWeather');
const summary = getElement('weather-summary');

const apiKey = 'f1b61d808951a2d71a565dca0f0810c8';



let cityname = getElement('stadt').value;


const getCityLocation = (cityname) => {

    axios
    .get(`http://api.openweathermap.org/geo/1.0/direct?q=London&appid=${apiKey}`)
    .then(response => (this.info = response.data.bpi))
    
    .catch(error => console.log(error));


    // fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&appid=${apiKey}`)
    // .then(response => response.json())
    
    // .then(data => displayGeoData(data))
    
};




const getCurrentLocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCityLocation((position) => {
            getGeoData(position.coords.latitude, position.coords.longitude); //встроенное 
            console.log(position, 'position');
        })
    }else {
        alert('No geolocation');
    }
    
};
const getGeoData = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)

    //city вместо lat and lon q = "city name"
    .then(response => response.json())
    .then(data => displayGeoData(data))
    // .catch(error => {
    //     console.log("Error"); //message
    // })
};






function convertKtoC(temp) { 
    return  temp -273,15;
  }
  //temp Kelvin->Celsius
const displayGeoData = (data) => {
    console.log(data, 'data')
    humidity.innerText = `Humidity: ${data.main.humidity}`;
    pressure.innerText = `Pressure: ${data.main.pressure}`;
    Ctemp = convertKtoC(data.main.temp);
    temperature.innerText = `Temperature: ${Ctemp} C`;
    windspeed.innerText = `Windspeed: ${data.wind.speed}`;
    
    //input + error catch
    //HA add geodata plus front 
    //plus loader
    //data not current some city data
};

//HA!!!!!!!!!! example
// const fromKelvintoCelsius = (v) => {
//     return ...
// }



getWeatherButton.addEventListener('click', getCityLocation);

// if(city.length >= 0){
//     // getWeatherButton.removeEventListener('click', getCurrentLocation);
//     getWeatherButton.addEventListener('click', getCityLocation);
    
// }else{
//     getWeatherButton.addEventListener('click', getCityLocation);
//     console.log(city, city.length);
// }








// const getCurrentLocation = () => {
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition((position) => {
//             getGeoData(position.coords.latitude, position.coords.longitude); //встроенное 
//             console.log(position, 'position');
//         })
//     }else {
//         alert('No geolocation');
//     }
    
// };
// const getGeoData = (lat, lon) => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ff5bb55eb9953af92e31f3ea90e69482`)

//     //city вместо lat and lon q = "city name"
//     .then(response => response.json())
//     .then(data => displayGeoData(data))
//     // .catch(error => {
//     //     console.log("Error"); //message
//     // })
// };