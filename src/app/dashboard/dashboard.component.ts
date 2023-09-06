import { PokemonService } from '../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  pokemen$: Observable<any> | undefined;
  pokemon: any;

  constructor(private pokemonService: PokemonService) {}
  ngOnInit() {
    this.pokemen$= this.pokemonService.getAllPokemon().pipe(tap(console.log));
  
  }

}
