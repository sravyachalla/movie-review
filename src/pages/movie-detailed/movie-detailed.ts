import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the MovieListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-movie-detailed',
    templateUrl: 'movie-detailed.html',
})
export class MovieDetailedPage {
    title: string;
    field_ratings : any;
    field_poster : any;
    body : string;
    field_genre : any;
    actors : any;
    comments : any;
    test : any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private nav: NavController, public http: Http, private sanitizer: DomSanitizer, public modalCtrl: ModalController) {
        this.test = this.navParams;
        console.log(this.navParams);
        let comment = this.navParams.get('comments');
        this.title = this.navParams.get('title');
        this.field_ratings = this.navParams.get('field_ratings');
        this.field_poster = this.navParams.get('field_poster');
        this.body = this.navParams.get('body');
        this.field_genre = this.navParams.get('field_genre');
        this.actors = this.navParams.get('actors');
        this.comments = comment['__zone_symbol__value'];
        console.log(this.comments);


    }
    ionViewDidLoad() {
    }
}
