import { IUser } from './../../model/IUser';
import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: IUser;
  userSubmitted: boolean;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.createRegistrationForm();
    // this.registrationForm = new FormGroup(
    //   {
    //     userName: new FormControl(null, Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl(null, [ Validators.required, Validators.minLength(8)]),
    //     confirmPassword: new FormControl(null, Validators.required),
    //     mobile: new FormControl(null, [ Validators.required, Validators.maxLength(10)]),
    //   },
    //   this.passwordMatchValidator);
    // this.registrationForm.controls['userName'].setValue('Default Value');
  }

  createRegistrationForm(): void {
    this.registrationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value
      ? null
      : { notMatched: true };
  }

  // Getter methos for all from controls
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit(): void {
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      console.log(this.registrationForm);
      console.log(this.registrationForm.value);
      this.userService.addUser(this.registrationForm.value);
      this.registrationForm.reset();
      this.userSubmitted = false;
    }
  }

  // addUser(user): void {
  //   let users = [];
  //   if (localStorage.getItem('Users')) {
  //     users = JSON.parse(localStorage.getItem('Users'));
  //     users = [user, ...users];
  //   } else {
  //     users = [user];
  //   }
  //   localStorage.setItem('Users', JSON.stringify(users));
  // }
}