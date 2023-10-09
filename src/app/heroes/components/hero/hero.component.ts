import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name: string = "ironman";
  age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(){
    this.name = 'Spiderman';
  }

  changeAge(){
    this.age = 25
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }
}
