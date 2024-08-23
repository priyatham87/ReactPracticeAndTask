import { useRef, useState } from "react";
import "./weather.css";
import axios from "axios";

const WeatherApi = () => {
  const search = useRef();
  const [weatherData, setWeatherData] = useState({});
  const [userData, setUserData] = useState(false);
  const [listOfData, setListOfData] = useState([]);

  const FetchApi = async (query) => {
    setUserData(true);
    try
    {
      const { data, status } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=e28335bda2b2839cdb71618cb3801a3e&units=metric`
      );
      console.log(data);
      if (status === 200) {
        setWeatherData(data);
      }
    } 
    catch (error) 
    {
      console.error("Error fetching data", error);
      setWeatherData({});
    } 
    finally
    {
        setUserData(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = search.current.value.trim();
    if (enteredValue.length > 0) {
      FetchApi(enteredValue);
      if (!listOfData.includes(enteredValue)) {
        setListOfData((prevData) => [...prevData, enteredValue]);
      } else {
        alert("City already searched.");
      }
    } else {
      alert("Please enter a valid city name.");
    }
  };

  return (
    <div className="WeatherList">
      <form onSubmit={submitHandler}>
        <label htmlFor="search">City Name: </label>
        <input
          type="search"
          id="search"
          ref={search}
          placeholder="Search City"
        />
        <button type="submit">Search</button>
      </form>
      {userData ? (
        <h3>Loading...</h3>
      ) : Object.keys(weatherData).length === 0 ? (
        <h3>Please search for a city.</h3>
      ) : (
        <div className="dataOfCity">
          <h4>City: {weatherData.name}</h4>
          <h4>Id: {weatherData.id}</h4>
          <h4>Coordinates lat: {weatherData.coord.lat}</h4>
          <h4>Coordinates lon: {weatherData.coord.lon}</h4>
          <h4>Country: {weatherData.sys.country}</h4>
          <h4>Feels Like: {weatherData.main.feels_like}°C</h4>
          <h4>Ground Level: {weatherData.main.grnd_level}</h4>
          <h4>Humidity: {weatherData.main.humidity}%</h4>
          <h4>Pressure: {weatherData.main.pressure} hPa</h4>
          <h4>Sea Level: {weatherData.main.sea_level}</h4>
          <h4>Temperature: {weatherData.main.temp}°C</h4>
          <h4>Max Temperature: {weatherData.main.temp_max}°C</h4>
          <h4>Min Temperature: {weatherData.main.temp_min}°C</h4>
        </div>
      )}
    </div>
  );
};

export default WeatherApi;
