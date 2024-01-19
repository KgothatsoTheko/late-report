import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '',   redirectTo: '/landing', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'sign-in', component: SignInComponent, },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'landing', component: LandingComponent },
  { path: '**', component: PageNotFoundComponent }, //Wildcard
  //Wildcard 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
