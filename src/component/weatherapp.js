import React, { useState } from "react";
import './weatherapp.css';
import search_icon from '../pics/search_icon.png';
import cloud_icon from '../pics/cloud_icon.png';
import humidity_icon from '../pics/humidity_icon.png';
import wind_icon from '../pics/wind_icon.png';
import clear_icon from '../pics/clear_icon.png';
import drizzle from '../pics/drizzle.png';
import snow_icon from '../pics/snow_icon.png';
import rain_icon from '../pics/rain_icon.png';



const WeatherApp = () => {

    let api_key = "9365d2f0c6c0f96c1d38dabb868cdbc0";

    const [wicon,setWicon] = useState(cloud_icon);

    const search = async () =>
    {
        const element = document.getElementsByClassName("cityinput")
        if(element[0].value === "")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity_percentage");
        const wind = document.getElementsByClassName("Wind_rate");
        const temprature = document.getElementsByClassName("weather_temp");
        const location = document.getElementsByClassName("weather_location");

        humidity[0].innerHTML = Math.floor(data.main.humidity)+" %";
        wind[0].innerHTML = Math.floor(data.wind.speed)+" Km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp)+"°C"
        location[0].innerHTML = data.name;

        if(data.weather[0].icon === "01d" || data.weather[0].icon ==="01n")
        {
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon ==="02n"){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon ==="03n"){
            setWicon(drizzle);
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWicon(drizzle);
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon ==="09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon === "010d" || data.weather[0].icon ==="010n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon === "013d" || data.weather[0].icon ==="013n"){
            setWicon(cloud_icon);
        }
        else{
            setWicon(clear_icon);
        }
    }

    return(
        <div className="main"> 
            <div>
                <h2 className="x"><center>Weather App</center> </h2>
            </div>
            <div className="search_bar">
                <input type = "text" className="cityinput" placeholder="Search any city" onClick={() => {
                    search()
                }}/>
                
            </div>
            <div className="weather_icons">
                <img src={wicon} alt=""/>
            </div>
            <div className="weather_temp">36°C</div>
            <div className="weather_location">New Delhi</div>
            <div className="data_container">
                <div className="element">
                    <img src = {humidity_icon} alt="" className=""/>
                    <div className="data">
                        <div className="humidity_percentage">26%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src = {wind_icon} alt="" className=""/>
                    <div className="data">
                        <div className="Wind_rate">8km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;