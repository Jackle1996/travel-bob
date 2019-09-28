import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.css']
})
export class DeletedialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeletedialogComponent>) { }

  ngOnInit() {
  }

  deleteClicked() {
    this.dialogRef.close(true);
  }
}
