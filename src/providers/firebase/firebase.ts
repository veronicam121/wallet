import { Injectable } from '@angular/core';
import { User } from '../../app/models/user';
import { AngularFireModule } from 'angularfire2';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseProvider {

  constructor(private database: AngularFireDatabase, private authbase: AngularFireAuth) {
  }
  public getUsers(): AngularFireList<{}> {
    return this.database.list('/users/');
  }

}
