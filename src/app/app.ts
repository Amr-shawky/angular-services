import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recipes } from "./component/Pages/recipes/recipes";
import { Posts } from './component/Pages/posts/posts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Recipes , Posts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-services';
}
