import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Blog, Timestamp } from '../../../../api/grpc-web-ts/blogposts_pb';

@Component({
  selector: 'app-blogdialog',
  templateUrl: './blogdialog.component.html',
  styleUrls: ['./blogdialog.component.css']
})

export class BlogdialogComponent implements OnInit {
  @ViewChild('blogtitle', null) blogtitle: ElementRef;
  @ViewChild('destination', null) destination: ElementRef;
  @ViewChild('startDate', null) startDate: ElementRef;
  @ViewChild('endDate', null) endDate: ElementRef;
  @ViewChild('description', null) description: ElementRef;

  private formtitle: string;
  constructor(private dialogRef: MatDialogRef<BlogdialogComponent>) {}

  ngOnInit() {
  }

  getFormTitle() {
    return this.formtitle;
  }

  setFormTitle(title: string) {
    this.formtitle = title;
  }

  setEditValues(blog: Blog) {
    this.blogtitle.nativeElement.value = blog.getTitle();
    this.destination.nativeElement.value = blog.getDestination();
    const startDateFormat = new Date(blog.getStartdate().getSeconds() * 1000);
    this.startDate.nativeElement.value = `${startDateFormat.getDate()}.${startDateFormat.getMonth()}.${startDateFormat.getFullYear()}`;
    const endDateFormat = new Date(blog.getEnddate().getSeconds() * 1000);
    this.endDate.nativeElement.value = `${endDateFormat.getDate()}.${endDateFormat.getMonth()}.${endDateFormat.getFullYear()}`;
    this.description.nativeElement.value = blog.getDescription();
  }

  saveClicked() {
    const blog: Blog = new Blog();
    blog.setTitle(this.blogtitle.nativeElement.value);
    blog.setDestination(this.destination.nativeElement.value);

    const startDateSplit = this.startDate.nativeElement.value.split('.');
    const startStamp = new Timestamp();
    startStamp.setSeconds(new Date(startDateSplit[2], startDateSplit[1], startDateSplit[0]).getTime() / 1000);
    blog.setStartdate(startStamp);

    const endDateSplit = this.endDate.nativeElement.value.split('.');
    const endStamp = new Timestamp();
    endStamp.setSeconds(new Date(endDateSplit[2], endDateSplit[1], endDateSplit[0]).getTime() / 1000);
    blog.setEnddate(endStamp);

    blog.setDescription(this.description.nativeElement.value);
    // TODO: determine author per login later
    blog.setAuthor('TODO determine per login later');
    console.log(blog);
    this.dialogRef.close(blog);
  }
}
