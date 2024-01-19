import { Component } from '@angular/core';import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  roles: string[] = ['facilitator', 'candidate', 'admin']
  registerFormData: any = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: '',
  }

  constructor(private snackbar: MatSnackBar, private router: Router) {}

  onclick():void {

    // Checks if password is the same
    if(this.registerFormData.password !== this.registerFormData.confirmPassword) {
      this.snackbar.open(`Password don't match`, 'Ok', {duration:3000})
      return
    }

    // Fetch data
    let _users = localStorage.getItem('users')
    const users = _users ? JSON.parse(_users) : []

    if(users?.length > 0) {
      //Checks to see if the user already exist 
      const foundUser = users.find((user:any) => user.email === this.registerFormData.email)

      if(foundUser) {
        // User does exist
        this.snackbar.open(`${foundUser.email} already exist`, 'Ok', { duration: 3000 })
      }  else {
        this.addNewUser(users);
      }
    }  else {
      this.addNewUser(users);
    }
  }

  addNewUser(users:any):void {
    // remove confirmPassword property
    delete this.registerFormData.confirmPassword;
    // if it does not, add new user to list
    users.push(this.registerFormData)
    // Update local storage
    localStorage.setItem('users', JSON.stringify(users))
    this.snackbar.open(`${this.registerFormData.email} was added successfully`, 'Ok', { duration: 3000 });
    // Send user to the login page
    this.router.navigate(['/sign-in']);
  }

  

}
