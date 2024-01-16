import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [{
    id: 1,
    name: 'pikachu',
    type: 'electric',
    isCool: false,
    isStylish: true
  }, {
    id: 1,
    name: 'squirtle',
    type: 'water',
    isCool: true,
    isStylish: true
  }, {

  }]

}
