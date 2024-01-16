import { Injectable } from '@angular/core';
import {Pokemon} from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  getPokemons() : Pokemon[] {
    return [{
      id: 1,
      name: 'pikachu',
      type: 'electric',
      isCool: false,
      isStylish: true
    }, {
      id: 2,
      name: 'squirtle',
      type: 'water',
      isCool: true,
      isStylish: true
    }, {
      id: 3,
      name: 'bulbasaur',
      type: 'grass',
      isCool: true,
      isStylish: false
    }]
  }
}
