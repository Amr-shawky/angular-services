import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RecipesServices } from '../../Services/recipes-services';
@Component({
  selector: 'app-recipes',
  imports: [],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css'
})
export class Recipes implements OnInit {
  data: any[] = [];
  constructor(private recipesService: RecipesServices) {}

  ngOnInit() {
    this.recipesService.getRecipes().subscribe((data) => {
            console.log(data);
          });
  }
  getRecipes() {
    this.recipesService.getRecipes().subscribe((data: any) => {
      this.data = data.data.recipes;
      console.log(this.data);
    });
  }
}
