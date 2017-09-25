import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private nav: NavController, public http: Http, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();

  }

  public logout() {
    //this.showLoading()
    let apilogoutUrl = 'http://d8-sandbox/user/logout';

    this.http.get(apilogoutUrl)
        .subscribe(data => {
          console.log(data);
        }, error => {
          //this.showError("Error Occured");
          console.log('Error!!!');
          console.log(error);
        });
  }

}

