import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { RESERVATION_DATA } from '../constants/app.constant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly reservationData = RESERVATION_DATA;
  constructor(private httpClient: HttpClient) { }

  getData(){
    return of(this.reservationData)  // we can use httpClient here with it's methods GET,POST,DELETE,UPDATE as per our requirement, if we are getting data from backend API, but i am using static data from json that's why using of() Observable method
  }
}
