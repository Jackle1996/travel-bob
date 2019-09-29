import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BlogpostdialogComponent } from '../blogpostdialog/blogpostdialog.component';

@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})
export class LogindialogComponent implements OnInit {
  @ViewChild('username', null) username: ElementRef;
  @ViewChild('password', null) password: ElementRef;

  constructor(private dialogRef: MatDialogRef<BlogpostdialogComponent>) { }

  ngOnInit() {
  }

  login() {
    let user;
    user.username = this.username.nativeElement.value;
    user.pass = this.password.nativeElement.value;
    this.dialogRef.close(user);
  }

}
