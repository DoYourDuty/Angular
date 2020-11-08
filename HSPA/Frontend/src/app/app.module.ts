import { UserServiceService } from './services/user-service.service';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http/';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: '**', component: PropertyListComponent }, // Not listed URL ** direct to this component
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [HousingService, UserServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
