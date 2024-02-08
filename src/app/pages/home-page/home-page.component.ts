import { Component } from '@angular/core';
import { RecipeCardComponent } from "../recipe-card/recipe-card.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [RecipeCardComponent]
})
export class HomePageComponent {

}
