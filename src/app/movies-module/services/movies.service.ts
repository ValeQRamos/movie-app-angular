import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MoviesData } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private API_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

  private SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

  constructor(private http: HttpClient) {
    this.getMovies();
  }

  public moviesList: Movie[] = [];

  searchMovie(tag: string) {
    this.http
      .get<MoviesData>(this.SEARCH_API + tag)
      .subscribe((resp) => (this.moviesList = resp.results));
  }

  getMovies(): void {
    this.http
      .get<MoviesData>(this.API_URL)
      .subscribe((resp) => (this.moviesList = resp.results));
  }
}
