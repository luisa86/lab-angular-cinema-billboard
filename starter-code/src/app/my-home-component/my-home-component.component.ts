import { Component, OnInit } from '@angular/core';
import { CinemaService} from '../services/cinema.service'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [CinemaService]
})
export class MyHomeComponentComponent implements OnInit {
  movies;

  constructor(private List: CinemaService) {
  }

  ngOnInit() {
    this.movies = this.List.getmovies();
  }

}
