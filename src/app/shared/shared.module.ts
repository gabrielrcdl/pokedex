import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Our Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokerListComponent } from './poker-list/poker-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokerListComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokerListComponent
    
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {}
