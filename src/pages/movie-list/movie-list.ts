import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from 'ionic-angular';
import { AddMoviePage } from './add-movie';


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

  movies: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private sanitizer: DomSanitizer, public modalCtrl: ModalController) {
    this.http.get('http://d8-sandbox/movie-content').map(res => res.json()).subscribe(data => {
          this.movies = data;
          console.log(data);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieListPage');
  }

}
