import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinemaServices/cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [CinemaService]
})
export class MyMovieComponentComponent implements OnInit {
  typeId: number;
  movie: Object;
  constructor(public CinemaService: CinemaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.typeId = +params['id'])
    this.movie = this.CinemaService.getMovie(this.typeId);
  }


}
