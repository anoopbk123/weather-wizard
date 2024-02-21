import React, { useState } from "react";
import "./Search.css";
import { toast } from "react-toastify";
export default function Search({city, setCity}) {

  const [cityInput, setCityInput] = useState(city)
  // const handleSearch = () => {
  //   console.log(cityInput)
  //   cityInput.trim() ? setCity(cityInput) : toast.error('enter city name')
  // }
  const handleSearch = () => {
    if (cityInput.trim()) {
      setCity(cityInput);
    } else {
      toast.error('Enter city name');
    }
  };
  return (
    <div className="search-container text-center d-flex justify-center align-items-center;">
      <div className="city-input-container">
      <input className="city-input" placeholder="Enter City Name" onChange={(event) => {
        setCityInput(event.target.value)
      }} value={cityInput} type="text" />
      </div>
      <div onClick={handleSearch}>
      <span className="search-icon">&#x1F50E;</span>
      </div>
    </div>
  );
}
