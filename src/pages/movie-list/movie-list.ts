import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from 'ionic-angular';
import { AddMoviePage } from './add-movie';
import { MovieDetailedPage } from '../movie-detailed/movie-detailed';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the MovieListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
})
export class MovieListPage {
  moviePage: any;
  movies: any;
  movieReview : Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private nav: NavController, public http: Http, private sanitizer: DomSanitizer, public modalCtrl: ModalController) {
    this.moviePage = MovieDetailedPage;
      this.http.get('http://d8ionic/movie-content').map(res => res.json()).subscribe(data => {
            this.movies = data;
            for (var i = 0, len = data.length; i < len; i++) {
                this.movies[i].comments = [];
                this.movies[i].comments = this.getMovieReview(this.movies[i].nid);
            };
        },
        err => {
          console.log(localStorage.getItem('loggedin_token'));
          console.log(err);
        }
    );
  }
    openModal(characterNum) {

        let modal = this.modalCtrl.create(AddMoviePage, characterNum);
        modal.present();
    }

    async getMovieReview(id: any): Promise<any> {
    const response = await this.http.get('http://d8ionic/movie-review/' + id).toPromise();
    return response.json();
  }
}
