import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Blogpost, Timestamp } from '../../../../api/grpc-web-ts/blogposts_pb';

@Component({
  selector: 'app-blogpostdialog',
  templateUrl: './blogpostdialog.component.html',
  styleUrls: ['./blogpostdialog.component.css']
})
export class BlogpostdialogComponent implements OnInit {
  @ViewChild('blogposttitle', null) blogposttitle: ElementRef;
  @ViewChild('location', null) location: ElementRef;
  @ViewChild('summary', null) summary: ElementRef;
  @ViewChild('travelDate', null) travelDate: ElementRef;
  @ViewChild('text', null) text: ElementRef;
  private blogpostId: number;
  private blogId: number;
  private formtitle: string;

  constructor(private dialogRef: MatDialogRef<BlogpostdialogComponent>) {
    this.blogpostId = -1;
    this.blogId = -1;
   }

  ngOnInit() {
  }

  getFormTitle() {
    return this.formtitle;
  }

  setFormTitle(title: string) {
    this.formtitle = title;
  }

  setBlogId(blogId: number) {
    this.blogId = blogId;
  }

  setEditValues(blogpost: Blogpost) {
    this.blogpostId = blogpost.getId();
    this.blogId = blogpost.getBlogid();
    this.blogposttitle.nativeElement.value = blogpost.getTitle();
    this.location.nativeElement.value = blogpost.getLocation();
    this.summary.nativeElement.value = blogpost.getSummary();
    const travelDateFormat = new Date(blogpost.getTraveldate().getSeconds() * 1000);
    this.travelDate.nativeElement.value = `${travelDateFormat.getDate()}.${travelDateFormat.getMonth()}.${travelDateFormat.getFullYear()}`;
    this.text.nativeElement.value = blogpost.getText();
  }

  saveClicked() {
    const blogpost: Blogpost = new Blogpost();
    blogpost.setId(this.blogpostId);
    blogpost.setBlogid(this.blogId);
    blogpost.setTitle(this.blogposttitle.nativeElement.value);
    blogpost.setLocation(this.location.nativeElement.value);
    blogpost.setSummary(this.summary.nativeElement.value);
    const travelDateSplit = this.travelDate.nativeElement.value.split('.');
    const travelStamp = new Timestamp();
    travelStamp.setSeconds(new Date(travelDateSplit[2], travelDateSplit[1], travelDateSplit[0]).getTime() / 1000);
    blogpost.setTraveldate(travelStamp);
    blogpost.setText(this.text.nativeElement.value);
    this.dialogRef.close(blogpost);
  }
}
