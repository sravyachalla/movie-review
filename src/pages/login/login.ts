import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../../pages/home/home';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { name: '', password: '' };
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams,private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  }

  public login() {
    this.showLoading()
   // let headers = new Headers();
   // headers.append('Content-Type', 'application/json' );
  //  let options = new RequestOptions({ headers: headers });


    let data = JSON.stringify({
      name: this.registerCredentials.name,
      pass: this.registerCredentials.password,
    });
    let apiloginUrl = 'http://d8-sandbox/user/login?_format=json';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(apiloginUrl, data, {headers: headers})
        .subscribe(data => {
            console.log(data['_body']);
            localStorage.setItem('loggedinData', data['_body']);
            let apiTokenUrl = 'http://d8-sandbox/rest/session/token';
            this.http.get(apiTokenUrl)
                .subscribe(data => {
                    localStorage.setItem('loggedin_token', data['_body']);
                }, error => {
                    console.log(data);
                    console.log(error);// Error getting the data
                });
          this.nav.setRoot(HomePage);
        }, error => {
          this.showError("Access Denied");
        });


  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
