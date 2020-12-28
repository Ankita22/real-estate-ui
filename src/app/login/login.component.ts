import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from "../services/http.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isSignout = false;
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  isLoginForm = true;
  registerForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.isSignout = data.isSignout;
  }

  onOkClick(): void {
    this.dialogRef.close();
  }

  onRegister(){
    if(this.isLoginForm) {
      this.isLoginForm = false;
    } else {
      this.isLoginForm = true;
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      registerUsername: ['', Validators.required],
      registerpwd: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.httpService
      .loginUser(this.form.value)
      .subscribe((data: any) => {
        if (data.statusCode != 404){
          this.loading = false;
          this.dialogRef.close({ isLoggedIn: true, user: data });
          alert("User logged in successfully!");
          this.router.navigate(['dashboard']);
        }else{
          this.loading = false;
          this.dialogRef.close({ isLoggedIn: false, user: {} });
          alert("Login Failed!");
        }
      }, 
      (err)=>{
        console.log("error -", err)
        this.loading = false;
        this.dialogRef.close({ isLoggedIn: false, user: {} });
        alert("Login Failed!");
      });
  }

  // convenience getter for easy access to form fields
  get fRegister() { return this.registerForm.controls; }

  onSubmitRegister() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.httpService
      .registerUser(this.registerForm.value)
      .subscribe((data: any) => {
        this.loading = false;
        alert("User registered successfully. Please login to continue!");
        this.isLoginForm = true;
      });
  }

  signout(isTrue) {
    console.log("signout - ",isTrue);
    if (isTrue){
      localStorage.removeItem("user");
      this.dialogRef.close({ isLoggedIn: false, user: {}, isSignOut: isTrue });
      this.router.navigate(['home']);
    }else{
      var user ={
        response: JSON.parse(localStorage.getItem("user"))
      };
      this.dialogRef.close({ isLoggedIn: true, isSignOut: isTrue, user: user });
    }
  }
}
