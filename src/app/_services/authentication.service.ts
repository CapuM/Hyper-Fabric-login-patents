import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor() { }
  getCurrentUser() {

    return 'gino'
  }

  public get currentUserValue() {
    return 'enzo';
  }

  logout() {
    console.log('owowowo')

  }
}
