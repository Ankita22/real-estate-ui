import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ModalComponent } from "../projects/modal/modal.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projectDetails = [];
  email: string;
  name: string;
  constructor(private httpService: HttpService, public dialog: MatDialog) { }

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
    project.isBookNow = true;
    console.log("project : ", subInd, " :: ", project);
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "60%",
      data: project,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.email = result;
    });
  }
}
