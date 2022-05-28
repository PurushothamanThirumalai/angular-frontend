import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BACKEND_URL = 'http://localhost:3000/api/users'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  // Uses http.get() to load data from a single API endpoint
  getUsers() {
    return this.http.get(BACKEND_URL);
  }

  addUser(firstname: string, lastName: string) {
    let body = {
      firstname: firstname,
      lastName: lastName
    }
    return this.http.post(BACKEND_URL,body);
  }

}
