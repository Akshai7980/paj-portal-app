import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userDetails: any;
  constructor(
    private platform: Platform,
    private token: TokenService,
    private navCtrl: NavController,
    private modalController: ModalController,
    // private backgroundGeolocation: BackgroundGeolocation,
    public router: Router // private splashScreen: SplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
        this.checkUserDetails();
    });
  }

  checkUserDetails() {
    this.token.storage
      .get('USER_DETAILS')
      .then(async (val) => {
        if (val) {
          console.log('val:',val);
          this.navCtrl.navigateRoot('/tabs/tab2');
          this.userDetails = val;
          console.log('userDetails:', this.userDetails);
          this.token.saveToken(this.userDetails?.token);
          this.token.setStorage('USER_TOKEN', this.userDetails?.token);
        } else {
          await this.navCtrl.navigateRoot('/login');
        }
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }

}
