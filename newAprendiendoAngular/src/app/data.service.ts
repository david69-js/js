import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) {
    console.log("This is service is work")
  }

  getData(){
    return this._http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
