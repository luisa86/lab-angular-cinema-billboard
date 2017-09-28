import { Component, OnInit } from '@angular/core';
import { CinemaService} from '../services/cinema.service'
import { ActivatedRoute, Router } from '@angular/router';

import { MyHomeComponentComponent } from '../my-home-component/my-home-component.component';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [CinemaService]
})
export class MyMovieComponentComponent implements OnInit {
    movieId: number;
  constructor(
    private List: CinemaService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
  }
  goToHome() {
   this.router.navigate(['/home']);
 }

}
