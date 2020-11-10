import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BudgetComponent } from './budget/budget.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'budget', component: BudgetComponent, canActivate: [AuthGuard]},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule], 
    providers: [AuthGuard]
})
export class AppRoutingModule {}