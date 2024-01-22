import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon, PokemonType} from "../../models/pokemon";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-template-form',
  standalone: false,
  // imports: [],
  templateUrl: './pokemon-template-form.component.html',
  styleUrl: './pokemon-template-form.component.scss'
})
export class PokemonTemplateFormComponent implements OnInit{
  pokemon!: Pokemon;  //prevent typescript checker.
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: 'Fire'
    },
    {
      key: 1,
      value: 'Water'
    },
  ]
  constructor(private pokemonService: PokemonService,
              private router: Router,
              private route: ActivatedRoute) { }
  toggleIsCool(object: any){  //bad practice act.
    console.log(object);
    this.pokemon.isCool = !this.pokemon.isCool;
  }
  // getPokemon(id: number) {}
  handleSubmit(object: any) {
    console.log(object);
  }
  ngOnInit() {
    this.pokemon = {} as Pokemon;
    this.route.params.subscribe((data: Params) => {   //asynchronous+lazyloading.
      this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
        this.pokemon = data;
      });
    })
  }
  back() {
    this.router.navigate(['/pokemon'])
  }
}
