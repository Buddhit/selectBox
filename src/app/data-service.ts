import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }

  getData(){
   
   return this.http.get('http://localhost:22742/api/services/app/shareduser/getUsers');

}

}