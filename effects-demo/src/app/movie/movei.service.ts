import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "./movie.model";

@Injectable({providedIn: 'root'})
export class MovieService {

    constructor(private httpClient : HttpClient){}

    getAll(){
        return this.httpClient.get<Movie []>('https://angular-demo-8a63e-default-rtdb.europe-west1.firebasedatabase.app/movies.json')
    }

}