import { Injectable } from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const POKEMON_API = 'http://localhost:3000/pokemon' //setup api endpoint
//assume that it is generally stored in environments folder.
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:  HttpClient) { }
  getPokemons() : Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(POKEMON_API);
    // [{
    //   id: 1,
    //   name: 'pikachu',
    //   type: 'electric',
    //   isCool: false,
    //   isStylish: true
    // }, {
    //   id: 2,
    //   name: 'squirtle',
    //   type: 'water',
    //   isCool: true,
    //   isStylish: true
    // }, {
    //   id: 3,
    //   name: 'bulbasaur',
    //   type: 'grass',
    //   isCool: true,
    //   isStylish: false
    // }]
  }
}
