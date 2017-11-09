import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { IonicPage, NavController, NavParams,AlertController, LoadingController, Loading, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MovieListPage } from './movie-list';
import { LoginPage } from '../../pages/login/login';

@Component({
    selector: 'add-movie',
    templateUrl: 'add-movie.html',
})
export class AddMoviePage {
    movie = { title: '', description: '',ratings: ''};
    constructor(public http: Http, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams,private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

    addMovie(){
        let data = JSON.stringify({
            title: {
                value: this.movie.title
            },
            body: {
                value: this.movie.title
            },
            field_ratings: {
                value: this.movie.ratings
            },
            type: {
                target_id: 'movies',
            },
            _links: {
                type: {
                    href: 'http:\/\/d8ionic\/rest\/type\/node\/movies'
                }
            },

        });
        console.log(data);
        let addmovieUrl = 'http://d8ionic/entity/node?_format=hal_json';
        let headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
        headers.append('Accept', 'application/hal+json');
        headers.append('Content-Type', 'application/hal+json');
        headers.append('X-CSRF-Token', localStorage.getItem('loggedin_token'));

        this.http.post(addmovieUrl, data, {headers: headers})
            .subscribe(data => {
                this.nav.setRoot(MovieListPage);
            }, error => {
                console.log(error);
                alert('OOps');
            });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}