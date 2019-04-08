import { Component, OnInit, Input } from '@angular/core';
import { MoviesDbService } from '../movies-db.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IMovie } from '../i-movie';

@Component({
  selector: 'app-movie-strip',
  templateUrl: './movie-strip.component.html',
  styleUrls: ['./movie-strip.component.css']
})
export class MovieStripComponent implements OnInit {

  MovieGroupTitle = "";
  @Input() MovieQuery: string;
  MoviesList: IMovie;
  constructor(private mdbs: MoviesDbService) { }

  ngOnInit() {
    if(this.MovieQuery=="InTheaters")
    {
      this.getNowShowingMovies();
      this.MovieGroupTitle = "Movies in Theaters";
    }
    if(this.MovieQuery=="UpComing")
    {
      this.getUpComingMovies();
      this.MovieGroupTitle = "Coming Soon!!!";
    }
    if(this.MovieQuery=="Popular")
    {
      this.getPopularMovies();
      this.MovieGroupTitle = "People Like you liked it.";
    }
  }
  getUpComingMovies()
  {
    this.mdbs.getUpComingMovies().subscribe((MovieData)=>this.MoviesList=MovieData.results);
  }
  getNowShowingMovies()
  {
    this.mdbs.getNowShowingMovies().subscribe((MovieData)=>this.MoviesList=MovieData.results);
  }
  getPopularMovies()
  {
    this.mdbs.getPopularMovies().subscribe((MovieData)=>this.MoviesList=MovieData.results);
  }

}
