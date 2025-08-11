import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipesServices {
  baseUrl: string = 'https://forkify-api.herokuapp.com/api/search?q=pizza';
  constructor(private httpClient: HttpClient) {}

  //! get all recipes
  getRecipes() : Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  x:number = 5;
}
