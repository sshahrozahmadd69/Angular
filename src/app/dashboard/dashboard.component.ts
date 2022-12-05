import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  heroes: Hero[]= [];
  villian: Hero[]= [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    // this.getVillian();
    this.getHeroes();

  }
  getHeroes() {
   this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes.slice(1,5)) 
  }
  // getVillian() {
  //   this.heroService.getHeroes().subscribe( villian => this.villian = villian.slice(5)) 
  //  }

}
