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

@IonicPage()
@Component({
    selector: 'page-company-list',
    templateUrl: 'company-list.html',
})
export class CompanyListPage {

    companies: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private sanitizer: DomSanitizer, public modalCtrl: ModalController) {
        this.http.get('http://fj-directory/jsonapi/node/company?_format=json&fields[node--company]=nid,uuid,title,field_about&include=field_logo&field[file--file]=url,id').map(res => res.json()).subscribe(data => {
                this.companies = data;
                console.log(data);
            },
            err => {
                console.log(err);
            }
        );
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CompanyListPage');
    }

}
