import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../app/services/auth.service';
import { AlertService } from '../../app/services/alert.service';

@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})


export class RegisterPage {

  private error: string;
  private registerForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService,
              private formBuilder: FormBuilder, private alert: AlertService) {

    this.registerForm = formBuilder.group({

      name: ['', Validators.compose([
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required])],

      lastname: ['', Validators.compose([
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required,
      ])],

      email: ['', Validators.compose([
        Validators.email,
        Validators.required,
        Validators.maxLength(30),
      ])],

      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
      ])],

      passwordRe: ['', Validators.compose([
        Validators.required,
      ])],
    },
    // , (formGroup: FormGroup) => {
    //  return this.checkMatching(formGroup.controls.password, formGroup.controls.passwordRe);
    // },
    );
  }

  private registerUser(registerForm: FormGroup) {
    this.authService.signup(registerForm.value.email, registerForm.value.password).
    then((success) => {
      this.alert.showAlert('Usuario registrado', 'Registrado')
      .then((res) => {
        this.navCtrl.pop();
      },
        (err) => {
          this.navCtrl.pop();
        });
    }).catch((error) => {
      this.alert.showAlert('Se encontro un problema', 'Error')
      .then((res) => {
        this.navCtrl.pop();
      },
        (err) => {
          this.navCtrl.pop();
        });
    });
  }

  private checkMatching(pass, passRe) {
    return pass === passRe ? null : { notSame: true };
  }

  private goToLogin() {
    this.navCtrl.pop();
  }
}
