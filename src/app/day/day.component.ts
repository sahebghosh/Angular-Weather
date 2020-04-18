import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  lat;
  lon;
  weather;
  constructor(private weatherservice: WeatherService) { }

  ngOnInit() {
    // this.getLocation();

  }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherservice.getWeather(this.lat, this.lon).subscribe(data => {
          this.weather = data;

        })
      })
    }
    console.log(this.weather);
  }

  getCity(city) {
    document.getElementById('animation').style.display = "none";
    document.getElementById('detail').style.display = "block";
    document.getElementById('contact').style.display = "block";
    this.weatherservice.getWeatherByCityName(city).subscribe(data => {
      this.weather = data;
    })
  }

}
