import { Injectable } from "@angular/core"// Necesitamos el decorador para poder injectar nuestro servicio
import { HttpClient } from '@angular/common/http'; //Para capturar la http
import { Observable } from 'rxjs'; //Al final lo que se devuelve es un observable

@Injectable()

export class PeticionesService{
    public url: string;


    constructor(
        private _http: HttpClient,
    ){
        this.url = "https://reqres.in/"
    }

    getUser(userId):Observable<any>{
       return this._http.get(this.url+"api/users/"+userId)
    }

}

