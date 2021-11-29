var getWeather = function() {
    fetch("https//api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=567ffb7052275a18e905a010e973d4c7")
    console.log("function was called");
};

getWeather();
