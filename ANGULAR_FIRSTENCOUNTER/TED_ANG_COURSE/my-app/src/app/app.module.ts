import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {SixToTenComponent} from "./six-to-ten/six-to-ten.component";
import {CommonModule} from "@angular/common";
import {PokemonListComponent} from "./pokemon-base/pokemon-list/pokemon-list.component";
import {PokemonBaseModule} from "./pokemon-base/pokemon-base.module";
import {PokemonTemplateFormComponent} from "./pokemon-base/pokemon-template-form/pokemon-template-form.component";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
    // PokemonTemplateFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        SixToTenComponent,
        CommonModule,
        // PokemonListComponent
        PokemonBaseModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
