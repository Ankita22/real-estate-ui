import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { MatCarousel, MatCarouselComponent } from "@ngmodule/material-carousel";
import { AfterViewInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [{ provide: LoginComponent, useValue: {} }],
})
export class HomeComponent implements OnInit, AfterViewInit {
  slides = [
    { imageUrl: "../../assets/imgs/b2.jpg" },
    { imageUrl: "../../assets/imgs/b1.jpg" },
    { imageUrl: "../../assets/imgs/b3.jpg" },
  ];
  constructor(
    private changeDetector: ChangeDetectorRef,
    public dialog: MatDialog,
    public loginComponent: LoginComponent
  ) {}

  ngOnInit(): void {}

  onLogin() {
    console.log("Login called");
    //this.loginComponent.openDialog();
  }

  ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }
}
