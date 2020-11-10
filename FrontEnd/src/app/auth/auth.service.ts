import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { BudgetService } from '../budget/budget.service';
import { AuthData } from './auth-data.model';


@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false; 

    constructor(private router: Router, private afAuth: AngularFireAuth, private budgetService: BudgetService) {}

    initAuthListener() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/budget']);
            } else {
                this.budgetService.cancelSubscriptions();
                this.authChange.next(false);
                this.router.navigate(['/login']);
                this.isAuthenticated = false;
            }
        })
    }

    registerUser(authData: AuthData) {
        this.afAuth.createUserWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
            console.log(result)
            this.router.navigate(['/login']);
        })
        .catch(error => {
            console.log(error);
        })
    }

    login(authData: AuthData) {
        this.afAuth.signInWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
            this.initAuthListener();
        })
        .catch(error => {
            console.log(error);
        })
    }

    logout() {
        this.afAuth.signOut();
    }

    
    isAuth() {
        return this.isAuthenticated;
    }
}