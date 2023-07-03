import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    { name: 'A test Recipe', description: 'This is simply a test', imagePath: 'https://res.cloudinary.com/flashfeast/image/upload/v1686703682/menu_image/jbirey1ijftw07tcyzlr.jpg' },
    { name: 'A test Recipe 2', description: 'This is simply a test 2', imagePath: 'https://res.cloudinary.com/flashfeast/image/upload/v1686703682/menu_image/jbirey1ijftw07tcyzlr.jpg' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
