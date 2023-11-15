import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '@service/connection.service';

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login')
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signupForm: FormGroup;
  loginForm: FormGroup;
  isCreateAccount:boolean = false

  constructor(private connectionService:ConnectionService,private fb: FormBuilder){}

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      idDocument:['1024356987', ],
      documentType:['CC',]
    });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value)
      this.connectionService.registerUser(this.signupForm.value)
      .subscribe({
        next:(response)=>{
          console.log(response)
        },
        error:(err)=>{console.log(err)}
      })
    }
  }

  onSubmitLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.connectionService.loginUser(this.loginForm.value)
      .subscribe({
        next:(response)=>{
          console.log(response)
        },
        error:(err)=>{console.log(err)}
      })
    }
  }
}
