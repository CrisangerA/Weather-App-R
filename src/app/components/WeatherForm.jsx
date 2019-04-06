import React, { Component } from 'react';
import Logo from '../assets/Icon_Weather.png';

class WeatherForm extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="card">
        <div className="card-header text-center">
          <img src={Logo} width="140px" alt="Weather"/>
          <h1>Weather</h1>
        </div>
        <form onSubmit={this.props.getWeather} className="card">
          <div className="card-body">
            <div className="form-group">
              <input type="text" name="City" className="form-control" placeholder="City Name" autoFocus />
            </div>
            <div className="form-group">
              <input type="text" name="Country" className="form-control" placeholder="Country Code" />
            </div>
            <div className="form-group">
              <button className="btn btn-success btn-block">
                Get Weather
            </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default WeatherForm;