import React, { Component } from 'react';
import WeatherForm from './components/WeatherForm.jsx';
import WeatherInfo from './components/WeatherInfo.jsx';

import { WEATHER_KEY } from './keys';

import Logo from './assets/React.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      temperature: '',
      humidity: '',
      wind_speed: 0,
      city: '',
      country: '',
      description: '',
      error: null
    }
    this.getWeather = this.getWeather.bind(this);
  }


  async getWeather(e) {
    e.preventDefault();

    const { City, Country } = e.target.elements;
    const cityValue = City.value, countryValue = Country.value;

    if (cityValue && countryValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/find?q=${cityValue},${countryValue}&units=metric&appid=${WEATHER_KEY}`
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);

      this.setState({
        temperature: data.list[0].main.temp,
        humidity: data.list[0].main.humidity,
        wind_speed: data.list[0].wind.speed,
        city: data.list[0].name,
        country: data.list[0].sys.country,
        description: data.list[0].weather[0].description,
        error: null
      })
    }
    else {
      this.setState({
        error: 'Ingrese una Ciudad o Codigo de Pais valido'
      });
    }
  }

  render() {
    return (
      <div className="App p-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
        <img src={Logo} width="40px" className="m-2"/>
        <a className="navbar-brand" href="#"><h3>Open Weather Map</h3></a>
        </nav>

        <div className="container p-5 mb-5">
          <div className="form-row">
            <div className="col-md-5 mx-auto my-2">
              <WeatherForm getWeather={this.getWeather}></WeatherForm>
            </div>
            <div className="col-md-5 mx-auto my-2">
              <WeatherInfo {...this.state}></WeatherInfo>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;