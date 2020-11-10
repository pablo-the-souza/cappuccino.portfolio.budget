import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BudgetComponent } from './budget/budget.component';
import { BudgetFormComponent } from './budget/budget-form/budget-form.component';
import { BudgetListComponent } from './budget/budget-list/budget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    BudgetFormComponent,
    BudgetListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { HttpClientModule } from "@angular/common/http"

// import { AngularFireModule } from '@angular/fire'; 
// import { AngularFirestoreModule } from '@angular/fire/firestore'; 
// import { AngularFireAuthModule } from '@angular/fire/auth'; 

// import { SignupComponent } from './auth/signup/signup.component';
// import { LoginComponent } from './auth/login/login.component';
// import { CodingComponent } from './coding/coding.component';
// import { CurrentCodingComponent } from './coding/current-coding/current-coding.component';
// import { NewCodingComponent } from './coding/new-coding/new-coding.component';
// import { PastCodingsComponent } from './coding/past-codings/past-codings.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { AppRoutingModule } from './app-routing.module';
// import { HeaderComponent } from './navigation/header/header.component';
// import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
// import { FormComponent } from './budget/form/form.component';
// import { ListComponent } from './budget/list/list.component';
// import { StopCodingComponent } from './coding/current-coding/stop-coding.component';
// import { AuthService } from './auth/auth.service';
// import { RecordDetailComponent } from './budget/record-detail/record-detail.component';
// import { environment } from '../environments/environment'; 



// @NgModule({
//   declarations: [
//     AppComponent,
//     SignupComponent,
//     LoginComponent,
//     
//     WelcomeComponent,
//     HeaderComponent,
//     SidenavListComponent,

//   ],
// 
//     AngularFireModule.initializeApp(environment.firebase),
//     AngularFirestoreModule,
//     AngularFireAuthModule

//   ],
//   providers: [AuthService, CodingService],
//   bootstrap: [AppComponent],
//   entryComponents: [StopCodingComponent]
// })
// export class AppModule { }
