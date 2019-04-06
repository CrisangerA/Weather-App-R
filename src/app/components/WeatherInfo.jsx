import React from 'react';

const WeatherInfo = props => {
  return (
    <div>
      {
        props.error &&
        <div className="alert alert-danger">
          {props.error}
        </div>
      }
      {
        props.temperature ?
          <div className="card">
            <div className="card-header text-center p-3">
              <i className="fas fa-city fa-5x"></i>
              <h1>
                {props.city}, {props.country}
              </h1>
            </div>
            <div className="card-body">
              <p>
                <h4>
                  <i className="fas fa-temperature-low"></i> Temperatura: {props.temperature} °C, {props.description}
                </h4>
              </p>
              <p>
                <h4>
                  <i className="fas fa-water"></i> Humedad: {props.humidity} %
                </h4>
              </p>
              <p>
                <h4>
                  <i className="fas fa-wind"></i> Viento: {props.wind_speed} Km/h
                </h4>
              </p>
            </div>
          </div>
          :
          <div className="card mt-2 text-center">
            <div className="card-header p-3">
              <h1>°C</h1>
            </div>
            <div className="card-body">
              <i className="fas fa-cloud-sun fa-10x"></i>
            </div>
          </div>
      }

    </div>
  )
}

export default WeatherInfo;