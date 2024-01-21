import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../models/pokemon";

@Component({
  selector: 'app-pokemon-template-form',
  standalone: false,
  // imports: [],
  templateUrl: './pokemon-template-form.component.html',
  styleUrl: './pokemon-template-form.component.scss'
})
export class PokemonTemplateFormComponent implements OnInit{
  pokemon!: Pokemon;  //prevent typescript checker.
  constructor(private pokemonService: PokemonService) { }
  toggleIsCool(object: any){  //bad practice act.
    console.log(object);
    this.pokemon.isCool = !this.pokemon.isCool;
  }
  // getPokemon(id: number) {}
  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    })
  }
}
