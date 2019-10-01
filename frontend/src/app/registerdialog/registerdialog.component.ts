import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BlogpostdialogComponent } from '../blogpostdialog/blogpostdialog.component';
import { User } from '../../../../api/grpc-web-ts/users_pb';

@Component({
  selector: 'app-registerdialog',
  templateUrl: './registerdialog.component.html',
  styleUrls: ['./registerdialog.component.css']
})

export class RegisterdialogComponent implements OnInit {
  @ViewChild('email', null) email: ElementRef;
  @ViewChild('username', null) username: ElementRef;
  @ViewChild('password', null) password: ElementRef;
  userType: string;

  constructor(private dialogRef: MatDialogRef<BlogpostdialogComponent>) { }

  ngOnInit() {
  }

  register() {
    const user = new User();
    user.setUserName(this.username.nativeElement.value);
    user.setEmail(this.email.nativeElement.value);
    user.setPassword(this.password.nativeElement.value);
    if (this.userType === 'blogger') {
      user.setIsBlogger(true);
    } else {
      user.setIsBlogger(false);
    }
    this.dialogRef.close(user);
  }
}
