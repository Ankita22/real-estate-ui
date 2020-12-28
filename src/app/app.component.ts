import { Component } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { LoginComponent } from "../../src/app/login/login.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "realEstatePoc";
  userDetails;
  isUserLoggedIn = false;

  constructor(public dialog: MatDialog) { 
    this.checkUserLogin();
  }

  ngOnInit() {
  }

  checkUserLogin(){
    if (localStorage.getItem("user") != null || localStorage.getItem("user") != undefined) {
      this.userDetails = JSON.parse(localStorage.getItem("user"));
      this.isUserLoggedIn = true;
      console.log('user - ', this.isUserLoggedIn);
    }
  }

  openDialog(isSignout) {
    var loginData ={
      isSignout: isSignout
    }
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "40%",
      data: loginData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("result - ",result);
      this.isUserLoggedIn = result.isLoggedIn;
      if (result.isLoggedIn){
        if (!result.isSignOut){
          this.userDetails = result.user.response;
          this.userDetails.isActive = true;
          localStorage.setItem("user", JSON.stringify(this.userDetails));
        }
      }else{
        if (result.isSignOut){
          this.ngOnInit();
        }
      }
    });
  }


}
