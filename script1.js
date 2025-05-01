const apikey = "2df692fcc445ff10f10450e5297817b6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector("#textInput");
const searchbtn = document.querySelector("#search");
const weatherIcon = document.querySelector("#weatherPic");

async function checkweather(city) {
    const response = await fetch(`${apiurl}${city}&appid=${apikey}`);
    var data = await response.json(); 

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C"; // Corrected unit
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"; // Added space before unit

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "cloud-removebg-preview.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "sunny1-removebg-preview.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "rainy-removebg-preview.png";
    }
}

searchbtn.addEventListener("click", () => { // Corrected method name
    checkweather(searchbox.value); // Corrected to use searchbox
});

searchbox.addEventListener("keydown" , function(event){
    if(event.key==="Enter"){
        checkweather(searchbox.value);
    }
});
