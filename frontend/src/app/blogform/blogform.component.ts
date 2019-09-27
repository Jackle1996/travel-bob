import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<BlogformComponent>) {}

  ngOnInit() {
  }

  close() {
    this.dialogRef.close('close weas called yeah');
  }
}
