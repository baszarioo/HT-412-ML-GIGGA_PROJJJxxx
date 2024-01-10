import { Component } from '@angular/core';
import {CommonModule, NgClass, NgIf, NgFor} from "@angular/common";
import {FormsModule} from "@angular/forms";
interface Pokemon {
  id: number,
  name: string,
  type: string,
  isRare: boolean
}
@Component({
  selector: 'app-six-to-ten',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    FormsModule,
    CommonModule
  ],
  templateUrl: './six-to-ten.component.html',
  styleUrl: './six-to-ten.component.scss'
})
export class SixToTenComponent {
  pokeName: string=""; //6
  pokemons: Pokemon[] =[{
    id: 1,
    name: 'pikachu',
    type: 'electric',
    isRare: false
  }, {
    id: 2,
    name: 'squirtle',
    type: 'water',
    isRare: true
  } , {
    id: 3,
    name: 'charmander',
    type: 'fire',
    isRare: true
  }]
  constructor() {}
  handleChange(event : any){
    this.pokeName = event?.target.value;
  }
}
