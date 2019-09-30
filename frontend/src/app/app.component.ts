import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LogindialogComponent } from './logindialog/logindialog.component';
import { RegisterdialogComponent } from './registerdialog/registerdialog.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontend';
  private loginDialog: MatDialogRef<LogindialogComponent>;
  private registerDialog: MatDialogRef<RegisterdialogComponent>;

  constructor(private dialog: MatDialog, private userService: UserService) {
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
  }

  createRegisterDialog() {
    if (this.registerDialog) {
      this.registerDialog.close();
    }
    this.registerDialog = this.dialog.open(RegisterdialogComponent, { width: '50%' });
    this.loginDialog.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Register user here
      }
    });
  }
}
