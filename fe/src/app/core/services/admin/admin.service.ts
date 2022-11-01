import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { UserModel } from '../../models/users/users.model';
import { GetAllUsers, Ban, Unban } from '../../store/users/users.actions';
import { ResponseModel } from '../../models/response.model';

const allUsersUrl = 'http://localhost:5000/users/all';
const banUserUrl = 'http://localhost:5000/users/ban';
const unbanUserUrl = 'http://localhost:5000/users/unban';

@Injectable()
export class AdminService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private store: Store<AppState>) {
  }

  getAllUsers() {
    this.http.get<UserModel[]>(allUsersUrl)
      .subscribe(users => {
        this.store.dispatch(new GetAllUsers(users));
      });
  }

  banUser(userId) {
    this.http.post(banUserUrl, {user: userId})
      .subscribe((newCat: ResponseModel) => {
        this.store.dispatch(new Ban(newCat.data));
        this.toastr.success(newCat.message);
      });
  }

  unbanUser(userId) {
    this.http.post(unbanUserUrl, {user: userId})
      .subscribe((newCat: ResponseModel) => {
        this.store.dispatch(new Unban(newCat.data));
        this.toastr.success(newCat.message);
      });
  }
}
