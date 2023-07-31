import './App.css';
import Weather from './Weather';
import { useState } from 'react';

const api = {
  key: "050d63aeb0692c8d77ebbfc79948cca3",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState({
    name: "Yerevan",
    main: {
      temp: 0,
    },
    weather: [
      {
        main: 'No data'
      }
    ]
  })

  const searchPressed = () => {
    fetch(`${api.base}/weather?q=${city}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => setWeather(result))
  }

  return (
    <div className="App">
      <Weather />
      <input
        type='text'
        placeholder='Enter city...'
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={searchPressed}>Search</button>
      <p>{ weather.name }</p>
      <p>{ weather.main.temp } °C</p>
      <p>{ weather.weather[0].main }</p>
    </div>
  );
}

export default App;
