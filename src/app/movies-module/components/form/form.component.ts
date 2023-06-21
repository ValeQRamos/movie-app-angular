import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movies-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private moviesService: MoviesService) {}

  public searchTag: string = '';

  search(): void {
    this.moviesService.searchMovie(this.searchTag);
    this.searchTag = '';
  }
}
