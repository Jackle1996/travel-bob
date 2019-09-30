import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LogindialogComponent } from './logindialog/logindialog.component';
import { RegisterdialogComponent } from './registerdialog/registerdialog.component';
import { UserService } from './services/user.service';
import { User } from '../../../api/grpc-web-ts/users_pb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontend';
  private loginDialog: MatDialogRef<LogindialogComponent>;
  private registerDialog: MatDialogRef<RegisterdialogComponent>;
  public isLoggedIn: boolean = true;

  constructor(private dialog: MatDialog, private userService: UserService) {
    if (localStorage.getItem('jwt')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  createLoginDialog() {
    if (this.loginDialog) {
      this.loginDialog.close();
    }
    this.loginDialog = this.dialog.open(LogindialogComponent, { width: '50%' });
    this.loginDialog.afterClosed().subscribe(result => {
      if (result) {
        this.userService.login(result, (jwt) => this.saveJWT(jwt));
      }
    });
  }

  saveJWT(jwt: string) {
    localStorage.setItem('jwt', jwt);
    this.isLoggedIn = true;
  }

  createRegisterDialog() {
    if (this.registerDialog) {
      this.registerDialog.close();
    }
    this.registerDialog = this.dialog.open(RegisterdialogComponent, { width: '50%' });
    this.registerDialog.afterClosed().subscribe(result => {
      if (result) {
        this.userService.createUser(result, () => this.isUserCreated(result));
      }
    });
  }

  isUserCreated(user: User) {
    this.userService.login(user, (jwt) => this.saveJWT(jwt));
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('jwt');
  }
}
