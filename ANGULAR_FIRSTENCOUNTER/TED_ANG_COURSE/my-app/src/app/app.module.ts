import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {SixToTenComponent} from "./six-to-ten/six-to-ten.component";
import {CommonModule} from "@angular/common";
import {PokemonListComponent} from "./pokemon-base/pokemon-list/pokemon-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        SixToTenComponent,
        CommonModule,
        PokemonListComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
