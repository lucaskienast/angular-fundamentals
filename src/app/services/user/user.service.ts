import { Injectable } from '@angular/core';
import {IUser} from "../../interfaces/user";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _rootUrl: string = "https://jsonplaceholder.typicode.com/users";
  private _rootPostsUrl: string = "https://jsonplaceholder.typicode.com/posts";

  private _prop: string = 'foo';
  public propChange: BehaviorSubject<string> = new BehaviorSubject<string>(this._prop);

  private users: Array<IUser> = [
    {
      "id": 0,
      "name": "",
      "username": "",
      "email": ""
    }
  ];

  constructor(private httpClient: HttpClient) { }

  getProp(): string {
    return this._prop;
  }

  setProp(prop: string): void {
    this._prop = prop;
    this.propChange.next(this._prop);
  }

  getUsers(): IUser[] {
    return this.users;
  }

  getUsersViaRest(): Observable<IUser[]> {
    let headers = new HttpHeaders().set(`Authorization`, `Bearer your-access-token-here`);
    return this.httpClient.get<IUser[]>(this._rootUrl, { headers });
  }

  getUserByIdViaRest(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this._rootUrl}/${id}`);
  }

  createUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this._rootUrl, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(this._rootUrl, user);
  }

  deleteUser(id: number): Observable<IUser> {
    return this.httpClient.delete<IUser>(`${this._rootUrl}/${id}`);
  }

  getUserPosts(id: number): Observable<any> {
    // let params = new HttpParams().set('userId', id.toString());
    return this.httpClient.get(`${this._rootPostsUrl}`);
  }

}
