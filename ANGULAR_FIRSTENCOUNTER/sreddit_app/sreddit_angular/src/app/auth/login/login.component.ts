import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { LoginRequestPayload } from './login-request.payload';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  isError: boolean = false;
  registerSuccessMessage: string;
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
    private router: Router, private toastr: ToastrService ) {
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.activatedRoute.queryParams
     .subscribe(params => {
      if(params['registered'] !== undefined && params['registered'] === 'true') {
        this.toastr.success('Signup Successful');
        this.toastr.warning('Please Check you inbox for activation email ' 
          + 'activate your account before you Login!');
      }
     });
  }
  login() {
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;
    this.authService.login(this.loginRequestPayload)
    .subscribe({
      next: data => {
        this.isError =false;
        this.router.navigateByUrl('/');
        this.toastr.success('Login Successful');
      },
      error: (err) => {
        this.isError = true;
        this.toastr.error(`${err.error.username}`);
      },
    })
  }
};
