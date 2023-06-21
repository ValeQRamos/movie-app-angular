import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies.interface';

@Component({
  selector: 'movies-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(private moviesService: MoviesService) {}

  public IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  movieScore(avg: number): string {
    if (avg >= 8) {
      return 'green';
    } else if (avg >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  get movies() {
    return this.moviesService.moviesList;
  }
}
