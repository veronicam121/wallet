import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    public user: Observable<firebase.User>;
    public status;

    constructor(private firebaseAuth: AngularFireAuth) {
        this.firebaseAuth.authState.subscribe((data) => {
            this.status = data;
        });
        console.log(this.status);
    }

    public signup(email, password) {
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    public login(email: string, password: string) {
        this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    }

    public loginGoogle() {
        this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public logout() {
        this.firebaseAuth.auth.signOut();
    }

}
