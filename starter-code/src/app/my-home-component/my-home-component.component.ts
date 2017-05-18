import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinemaServices/cinema.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [ CinemaService ]
})
export class MyHomeComponentComponent implements OnInit {
  movies: any;

  constructor(public cinemaService : CinemaService) { }

  ngOnInit() {
    this.movies = this.cinemaService.getMovies();
  }

}
