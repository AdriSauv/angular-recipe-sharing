import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  recipeSubject = new BehaviorSubject<any>({
    recipes:[],
    loading:false,
    newRecipe:null,
  });

  private getHeaders():HttpHeaders{
    const token = localStorage.getItem('jwt');
    return new HttpHeaders({
      Authorization:`Bearer ${token}`
    })
  }

  getRecipes():Observable<any>{
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/api/recipes`,{headers}).pipe(tap((recipes)=>{
        const currentState = this.recipeSubject.value;
        this.recipeSubject.next({...currentState,recipes})
      })
  )}

  createRecipe(recipe:any):Observable<any>{
    const headers = this.getHeaders();
    return this.http.put(`${this.apiUrl}/api/recipe`,recipe, { headers }).pipe(
      tap((newRecipe)=>{
        const currentState = this.recipeSubject.value;
        this.recipeSubject.next({...currentState,
          recipes:
            [newRecipe,...currentState.recipes]})
      })
  )}
}
