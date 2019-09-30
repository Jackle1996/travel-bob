import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LogindialogComponent } from './logindialog/logindialog.component';
import { RegisterdialogComponent } from './registerdialog/registerdialog.component';
import { UserService } from './services/user.service';
import { User } from '../../../api/grpc-web-ts/users_pb';
import { JwtService } from './services/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private readonly jwtKey: string = 'jwt';
  private loginDialog: MatDialogRef<LogindialogComponent>;
  private registerDialog: MatDialogRef<RegisterdialogComponent>;
  public isLoggedIn = true;

  constructor(private dialog: MatDialog, private userService: UserService, private jwtService: JwtService) {
    if (this.jwtService.isUserLoggedIn()) {
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
    localStorage.setItem(this.jwtKey, jwt);
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
    localStorage.removeItem(this.jwtKey);
  }

  getUsername(): string {
    return this.jwtService.getUsernameFromJWT();
  }
}
