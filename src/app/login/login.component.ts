import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";

import { LoginModalComponent } from "./modal/login-modal.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
})
export class LoginComponent implements OnInit {
  project: any;
  animal: string;
  name: string;

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.name = "Login Here!";
  }

  ngOnInit() {
    // this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: "250px",
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
