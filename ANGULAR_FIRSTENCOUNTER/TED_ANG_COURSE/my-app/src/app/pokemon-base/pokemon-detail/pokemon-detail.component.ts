import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-pokemon-detail',
  standalone: false,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{
  @Input()
  detail!: Pokemon; //bang | null operator
  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  constructor() {
    //this.detail = ""; /* eventual null check */
  }
  ngOnInit() {
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
