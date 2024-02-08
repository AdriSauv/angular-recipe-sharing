import { Component } from '@angular/core';
import { RecipeCardComponent } from "../recipe-card/recipe-card.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [RecipeCardComponent, MatIconModule]
})
export class HomePageComponent {
  recipes = [1,1,1,1,1,1];

}
