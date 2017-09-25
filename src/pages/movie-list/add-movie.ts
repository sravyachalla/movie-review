import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { IonicPage, NavController, NavParams,AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MovieListPage } from './movie-list';
import { LoginPage } from '../../pages/login/login';

@Component({
    selector: 'add-movie',
    templateUrl: 'add-movie.html',
})
export class AddMoviePage {
    movie = { title: ''};
    constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams,private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}
    addMovie(){
        let data = JSON.stringify({
            title: {
                value: this.movie.title
            },
            type: {
                target_id: 'movies',
            },
            _links: {
                type: {
                    href: 'http:\/\/d8-sandbox\/rest\/type\/node\/movies'
                }
            },

        });
        let addmovieUrl = 'http://d8-sandbox/entity/node?_format=hal_json';
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
}