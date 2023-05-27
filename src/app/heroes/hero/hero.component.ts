import { Change } from './../../../../node_modules/@schematics/angular/utility/change.d';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  ngOnInit(): void {

  }
  public name: string = 'Ironman';
  public age: number = 45;
  public reset: boolean = false;
  public mostrarBotonRenderizado: boolean = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 25
  }
  resetForm(): void {
    this.name = 'ironman';
    this.age = 45
  }
}






