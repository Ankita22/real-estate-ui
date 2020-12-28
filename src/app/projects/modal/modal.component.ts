import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  project:any;
  userDetails;
  isUserActive=false;
  isProjects=false;
  constructor( public dialogRef: MatDialogRef<ModalComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data) { 
    
    console.log("this.router : ", this.router);
    this.project = data;
    this.userDetails = JSON.parse(localStorage.getItem("user"));
    if(this.userDetails && this.userDetails.isActive){
      this.isUserActive = true;
      if (this.router.url == "/projects" || this.router.url == "/home#projects"){
        this.isProjects = true;
      }
    }
    }

  onOkClick(): void {
      this.dialogRef.close();
  }

  onPurchase(): void {
    this.dialogRef.close();
    alert("Thank you for choosing us.Please fill contact form. Our Associate will contact you shortly!");
    this.router.navigate(['contactDetails']);
  }

  seeMoreOnPurchase() :void {
    this.dialogRef.close();
    this.router.navigate(['dashboard']);
  }

  ngOnInit(): void {

  }

}
