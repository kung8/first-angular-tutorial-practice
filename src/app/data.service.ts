import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  secondFunc(){
    return console.log('This is the first Service Function')
  }

  getUsers(){
    return this.http.get('https://reqres.in/api/users')
  }
}
