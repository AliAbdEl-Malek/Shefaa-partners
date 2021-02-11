
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient, ) {

  }

   

  get(url:string){
    return this.httpClient.get(`${environment.APIURL}/${url}`);
  }

  post(url:string,user:any){
    return this.httpClient.post(`${environment.APIURL}/${url}`,user)
  }

  put(url:string,user:any){
    return this.httpClient.put(`${environment.APIURL}/${url}`,user)
  }

  
}

