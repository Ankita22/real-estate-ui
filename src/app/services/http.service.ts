import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap, concatAll } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class HttpService {
  apiURL: string = "http://localhost:7000/api";
  constructor(private http: HttpClient) {}

  // api to get projects details
  getProjects(): Observable<any> {
    return this.http
      .get(this.apiURL + "/project/getproject")
      .pipe(map(this.extractData));
  }

  // sendContactData(contactData): Observable<any> {
  //   return this.http.get(this.apiURL + '/contact?data='+ JSON.stringify(contactData)).pipe(
  //     map(this.extractData));
  // }

  // api to store contact us details
  sendContactData(contactData): Observable<any> {
    return this.http
      .post(this.apiURL + "/contact/addcontact", contactData)
      .pipe(map(this.extractData));
  }

  // api to register user
  registerUser(registerData): Observable<any> {
    return this.http
      .post(this.apiURL + "/user/register", registerData)
      .pipe(map(this.extractData));
  }

  // api to login user
  loginUser(loginData): Observable<any> {
    return this.http
      .post(this.apiURL + "/user/login", loginData)
      .pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
}
