import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarsRoverApiPhotos {

  constructor(private http: Http) { }

  getByDateAndCamera(date: string, camera: string) {
    return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&camera=" + camera + "&api_key=crZX5qP8REwDhWfw2CNqR8LVin57uQ3e9AtOmhZX")
  }
}
