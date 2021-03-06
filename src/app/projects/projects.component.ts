import { Component, OnInit } from "@angular/core";
import { HttpService } from "../services/http.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ModalComponent } from "./modal/modal.component";
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  projectDetails = [];
  email: string;
  name: string;
  constructor(private httpService: HttpService, public dialog: MatDialog, private router:Router) {}

  ngOnInit(): void {
    this.httpService.getProjects().subscribe((data: any) => {
      this.projectDetails = data.response;
    });
  }

  openDialog(project, index, subInd): void {
    switch (index) {
      case 0:
        project.type = "Completed Projects";
        break;
      case 1:
        project.type = "Ongoing Projects";
        break;
      case 2:
        project.type = "Upcoming Projects";
        break;
    }
    console.log("project : ", project);
    project.isBookNow = false;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "60%",
      data: project,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed : ",result);
      this.email = result;
    });
  }
}
