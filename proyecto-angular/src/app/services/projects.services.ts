import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project  } from '../models/projects';
import { Global } from './global'



@Injectable()

export class ProjectService{
    public url:string;

    constructor(
        private _http: HttpClient,
    ){
        this.url = Global.url;
    }
    
    testService(){
        return "Project Service"
    }

    saveProject(project: Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.post(this.url+'save-project', params, {headers: headers})
    }

    getProjects(): Observable<any>{
        var headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+"projects",{headers: headers})
    }

    getProject(id): Observable<any>{
        var headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'project/'+id, {headers: headers});
    }
     
}