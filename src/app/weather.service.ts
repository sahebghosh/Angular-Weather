import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apikey = 'f40144229c726bb67506050da3602379';
  constructor(private http: HttpClient) { }

  getWeather(lat, lon) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'imperial')
      .set('appid', this.apikey)

    return this.http.get(this.url, { params })
  }

  getWeatherByCityName(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'imperial')
      .set('appid', this.apikey)

    return this.http.get(this.url, { params })
  }

}
