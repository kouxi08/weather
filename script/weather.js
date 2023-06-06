const d = new Date();
let dayNum = d.getDay();
const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let day = weekday[dayNum];



let weather = {
    "apiKey" : "58b37c17abdc52d0115f44e814613e08",
     fetchWeather : function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=34.694&lon=135.502&units=metric&appid="
             + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
            console.log("sdfghj");
    },

    displayWeather: function(data) {
        const { icon, description} = data.weather[0];
        const { temp, temp_min, temp_max, humidity} = data.main;
        const { speed } = data.wind;
        console.log(icon,description,temp,humidity,speed);
        //document.querySelector("city").innerText = "Osaka";
        // document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°";
        document.querySelector(".mintemp").innerText = "min : " + Math.round(temp_min) + "°";
        document.querySelector(".maxtemp").innerText = "max : " + Math.round(temp_max) + "°";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + " %";
        document.querySelector(".wind").innerText = "wind speed : " + Math.round(speed) + " km/h";
    }
};
weather.fetchWeather();
setInterval("weather.fetchWeather()",120000);


let weekweather = {
    "apiKey" : "58b37c17abdc52d0115f44e814613e08",
     fetchWeather : function() {
        fetch(
            "http://api.openweathermap.org/data/2.5/onecall?lat=34.694&lon=135.502&units=metric&appid="
             + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
            console.log("45678");
    },

    displayWeather: function(data) {
        weekday.forEach((elemn, dayNum) => {
            document.querySelector(".day_" + dayNum).innerText = elemn;
        });
        data.daily.forEach((day,idx) => {
            const { max, min} = data.daily[idx].temp;
            const { icon} = data.daily[idx].weather[0]
            //document.querySelector("city").innerText = "Osaka";
            document.querySelector(".m-icon_" + idx).src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            document.querySelector(".m_min_" + idx).innerText = Math.round(min) + "°";
            document.querySelector(".m_max_" + idx).innerText = Math.round(max) + "°";
            console.log("22222");

        });

    }
};
weekweather.fetchWeather();



