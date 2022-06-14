import { Injectable } from '@angular/core';
import {IUser} from "../../interfaces/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _rootUrl: string = "https://jsonplaceholder.typicode.com/users";

  private users: Array<IUser> = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org"
    }
  ];

  constructor(private httpClient: HttpClient) { }

  getUsers(): IUser[] {
    return this.users;
  }

  getUsersViaRest(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this._rootUrl);
  }

  getUserByIdViaRest(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this._rootUrl}/${id}`);
  }

}
