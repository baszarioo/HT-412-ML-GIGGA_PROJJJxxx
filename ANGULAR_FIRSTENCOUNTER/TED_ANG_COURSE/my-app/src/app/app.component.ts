import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  favoriteAnimal: string = 'turtle';
  pokemonName5: string='pikachu';
  constructor() { }
  handleClick(value: any){  //template ref
    console.log(value);
  }
}
