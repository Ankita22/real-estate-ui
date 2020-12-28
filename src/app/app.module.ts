import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ModalComponent } from "./projects/modal/modal.component";
import { LoginModalComponent } from "./login/modal/login-modal.component";

import { MatCarouselModule } from "@ngmodule/material-carousel";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatDialogModule } from "@angular/material/dialog";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactDetailsComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    ModalComponent,
    LoginModalComponent,
    DashboardComponent,
  ],
  imports: [
    NgbModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, LoginModalComponent],
})
export class AppModule {}
