import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getUsers = () => {
    return this.http.get('https://d3k31z3r-opdracht-3.glitch.me/users')
  }
}
