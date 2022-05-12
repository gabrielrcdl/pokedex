import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';


@Component({
  selector: 'poker-list',
  templateUrl: './poker-list.component.html',
  styleUrls: ['./poker-list.component.scss']
})
export class PokerListComponent implements OnInit {

  constructor(private pokeApiService: PokeApiService) { }

  public allPokemons: any
  public filterAllPokemons: any;

  public apiError: boolean = false

  ngOnInit(): void {

    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.filterAllPokemons = res.results;
        this.allPokemons = this.filterAllPokemons
      },
      error => {
        this.apiError = true
      }
    );
  }

  public getSearch(value: string){
    const filter = this.filterAllPokemons.filter( (res:any) => {
      return !res.name.indexOf(value.toLocaleLowerCase().trim())
    })

    this.allPokemons = filter
  }

  

}
