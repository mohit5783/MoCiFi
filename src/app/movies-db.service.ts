import { Injectable } from '@angular/core';
import {Headers, Http } from '@angular/http';
import {Observable} from'rxjs/Observable';

@Injectable()
export class MoviesDbService {

  constructor(private http:Http) { }

  getUpComingMovies()
  {
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=6acfcdd9e01bed224e4e5440f60800c1&language=en-US&page=1").map((res)=>res.json());
  }
  getNowShowingMovies()
  {
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=6acfcdd9e01bed224e4e5440f60800c1&language=en-US&page=1").map((res)=>res.json());
  }
  getPopularMovies()
  {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=6acfcdd9e01bed224e4e5440f60800c1&language=en-US&page=1").map((res)=>res.json());
  }
}
