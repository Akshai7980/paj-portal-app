/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  showLoader: boolean;
  isChecked: boolean;
  showPassword: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private common: CommonService,
    private token: TokenService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.loginFormValidator();
  }

  private loginFormValidator() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  public loginSubmit() {
    if (this.loginForm.valid) {
      console.log('loginForm:', this.loginForm.value);
      this.showLoader = true;
      this.api.postRequestForLogin('login', this.loginForm.value).subscribe(
        (res: any) => {
          console.log('res:', res);
          if (res.success) {
            if (res.message === 'Wrong UserName/Password') {
              this.showLoader = false;
              const alertHead = 'Failed!';
              const alertMessage =
                'Invalid login credentials, Wrong UserName/Password';
              this.common.presentAlert(alertHead, alertMessage);
            } else {
              this.showLoader = false;
              this.common.navCtrl.navigateRoot('/tabs/tab3');
              console.log('token:', res.success.token);
              this.token.saveToken(res.success.token);
              this.token.saveUser(res.success);
              this.token.setStorage('USER_DETAILS', res.success);
              this.token.setStorage('USER_TOKEN', res.success.token);
            }
          } else {
            this.showLoader = false;
            console.log('failed');
            const toastMsg = 'Something went wrong, Please try again later';
            const toastTime = 3000;
            this.common.presentToast(toastMsg, toastTime);
          }
        },
        (err) => {
          this.showLoader = false;
          console.log('Error:', err);
          const toastMsg = 'Something went wrong, Please try again later';
          const toastTime = 3000;
          this.common.presentToast(toastMsg, toastTime);
        }
      );
    } else {
      this.showLoader = false;
      const alertHead = 'Failed!';
      const alertMessage =
        'Please enter valid details and <strong>password must contain 6 digits.</strong>';
      this.common.presentAlert(alertHead, alertMessage);
      console.log('not valid');
    }
  }

  onCheckRemember(e) {}
}
