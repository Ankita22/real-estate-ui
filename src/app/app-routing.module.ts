import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contactDetails", component: ContactDetailsComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //{useHash: true}
  exports: [RouterModule],
})
export class AppRoutingModule {}
