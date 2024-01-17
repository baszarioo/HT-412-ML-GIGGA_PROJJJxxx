import {Component, OnInit} from '@angular/core';
import {NgClass, NgStyle, CommonModule} from "@angular/common";
import {PokemonDetailComponent} from "../pokemon-detail/pokemon-detail.component";
import {Pokemon} from 'src/app/models/pokemon';
import {PokemonService} from "../../services/pokemon.service";
@Component({
  selector: 'app-pokemon-list',
  standalone: false,
    // imports: [
    //     NgClass,
    //     NgStyle,
    //     PokemonDetailComponent,
    //     CommonModule
    // ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {
  /* XDDD array in a smart component? Pathetic... prophylaxis*/
  // pokemons: Pokemon[] = [{
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
  //     id: 3,
  //     name: 'bulbasaur',
  //     type: 'grass',
  //     isCool: true,
  //     isStylish: false
  // }]
  pokemons!: Pokemon[];
  constructor(private pokemonService: PokemonService) { }   //dep. injection
  handleRemove(event: Pokemon){
      this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
          return pokemon.id !== event.id;
      })
      //whereas /* this.pokemons = this.pokemons[0] */ //is a state mutability, - avoid it at all cost.
  }
  ngOnInit() {
    // this.pokemons = this.pokemonService.getPokemons();
      this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
          console.log(data);
          this.pokemons = data;
      });
  }
}

