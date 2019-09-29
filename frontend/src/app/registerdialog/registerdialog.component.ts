import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BlogpostdialogComponent } from '../blogpostdialog/blogpostdialog.component';

@Component({
  selector: 'app-registerdialog',
  templateUrl: './registerdialog.component.html',
  styleUrls: ['./registerdialog.component.css']
})
export class RegisterdialogComponent implements OnInit {
  @ViewChild('username', null) username: ElementRef;
  @ViewChild('password', null) password: ElementRef;

  constructor(private dialogRef: MatDialogRef<BlogpostdialogComponent>) { }

  ngOnInit() {
  }

  register() {
    let user;
    user.username = this.username.nativeElement.value;
    user.pass = this.password.nativeElement.value;
    this.dialogRef.close(user);
  }
}
