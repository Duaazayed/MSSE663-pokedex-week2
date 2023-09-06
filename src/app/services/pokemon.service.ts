import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
  getAllPokemon(): Observable<any> {
    return this.http
    .get('https://pokeapi.co/api/v2/pokemon')
    .pipe(map((data: any)=> data.results));

  }
}
