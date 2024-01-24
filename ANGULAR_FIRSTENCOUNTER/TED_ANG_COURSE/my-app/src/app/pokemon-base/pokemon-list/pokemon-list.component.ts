import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
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
export class PokemonListComponent implements OnInit, AfterViewInit, AfterContentInit {
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

  pokemons!: Pokemon[];   // pokemons: Pokemon[] = [];
  // @ViewChild('pokemonRef') pokemonRef!: ElementRef;  // more than 1 child - iteration.
  @ViewChildren('pokemonRef') pokemonRef!: ElementRef;
  @ViewChild('pokemonTh') pokemonTh!: ElementRef;
  constructor(private pokemonService: PokemonService, private renderer: Renderer2) { }   //dep. injection
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

  ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
    console.log(this.pokemonTh);
    this.pokemonTh.nativeElement.innerText = "Pokemon Name"; // some queries are returned
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Pokemon List Hello W');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.pokemonTh.nativeElement, div);
  }
  ngAfterContentInit(): void {
    console.log(this.pokemonRef);
  }
}

