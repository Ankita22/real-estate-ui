import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpService } from "../services/http.service";

@Component({
  selector: "app-contactDetails",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.scss"],
})
export class ContactDetailsComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private httpService: HttpService) {
    this.contactForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      mobileNumber: new FormControl(),
      comments: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log("Formdata : ", this.contactForm.value);
    this.httpService
      .sendContactData(this.contactForm.value)
      .subscribe((data: any) => {
        alert(data.response);
        this.contactForm.reset();
      });
  }
}
