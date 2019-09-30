import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BlogpostdialogComponent } from '../blogpostdialog/blogpostdialog.component';
import { User } from '../../../../api/grpc-web-ts/users_pb';

@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})
export class LogindialogComponent implements OnInit {
  @ViewChild('email', null) email: ElementRef;
  @ViewChild('password', null) password: ElementRef;

  constructor(private dialogRef: MatDialogRef<BlogpostdialogComponent>) { }

  ngOnInit() {
  }

  login() {
    const user = new User();
    user.setUserName('no username since this is login');
    user.setEmail(this.email.nativeElement.value);
    user.setPassword(this.password.nativeElement.value);
    this.dialogRef.close(user);
  }

}
