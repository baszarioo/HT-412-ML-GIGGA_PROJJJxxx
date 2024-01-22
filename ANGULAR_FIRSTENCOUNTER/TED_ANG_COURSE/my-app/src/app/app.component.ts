import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
// reactive navbar interface
interface Nav {
  link: string,
  name: string,
  exact: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true,
    },
    {
      link: '/badroute',
      name: 'Bad Route',
      exact: true
    }
  ]
  // favoriteAnimal: string = 'turtle';
  // pokemonName5: string='pikachu';
  constructor() { }
  handleClick(value: any){  //template ref
    console.log(value);
  }
}
