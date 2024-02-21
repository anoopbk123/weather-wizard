import React, { useEffect, useState } from "react";
import "./WeatherWizard.css";
import Header from "./header/Header";
import Search from "./search/Search";
import Weather from "./weather/Weather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WeatherWizard() {
  const [city, setCity] = useState("Kochi");
  const [weatherData, setWeatherData] = useState();
  const apiKey = "c7c6352c948caea74ebf6fa6d9e478c1";

  const fetchWeatherData = async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      if (error instanceof TypeError) {
        toast.error("Network error: Please check your internet connection");
      } else {
        toast.error("Error fetching weather data");
        console.error("Error fetching weather data:", error);
      }
    }
    
  };
  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  return (
    <div className="weather-wizard-container">
      <Header />
      <ToastContainer />
      <main className="main">
        <Search city={city} setCity={setCity} />
        <Weather weatherData={weatherData} />
      </main>
    </div>
  );
}
