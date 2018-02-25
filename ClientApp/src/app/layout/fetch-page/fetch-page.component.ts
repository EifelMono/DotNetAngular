import { Component, OnInit, Inject } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-fetch-page',
    templateUrl: './fetch-page.component.html',
    styleUrls: ['./fetch-page.component.scss'],
    animations: [routerTransition()]
})
export class FetchPageComponent implements OnInit {
    public forecasts: WeatherForecast[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
        this.forecasts = result;
      }, error => console.error(error));
    }

    ngOnInit() { }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
  }
