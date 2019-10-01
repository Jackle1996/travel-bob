import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Blog, Timestamp } from '../../../../api/grpc-web-ts/blogposts_pb';
import { JwtService } from '../services/jwt.service';

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
  @ViewChild('imagelink', null) imagelink: ElementRef;
  private formtitle: string;
  private blogId: number;

  constructor(private dialogRef: MatDialogRef<BlogdialogComponent>, private jwtService: JwtService) {
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

  setEditValues(blog: Blog) {
    this.blogId = blog.getId();
    this.blogtitle.nativeElement.value = blog.getTitle();
    this.destination.nativeElement.value = blog.getDestination();
    const startDateFormat = new Date(blog.getStartdate().getSeconds() * 1000);
    this.startDate.nativeElement.value = `${startDateFormat.getDate()}/${startDateFormat.getMonth() + 1}/${startDateFormat.getFullYear()}`;
    const endDateFormat = new Date(blog.getEnddate().getSeconds() * 1000);
    this.endDate.nativeElement.value = `${endDateFormat.getDate()}/${endDateFormat.getMonth() + 1}/${endDateFormat.getFullYear()}`;
    this.description.nativeElement.value = blog.getDescription();
    this.imagelink.nativeElement.value = blog.getBlogimageurl();
  }

  saveClicked() {
    const blog: Blog = new Blog();
    blog.setId(this.blogId);
    blog.setTitle(this.blogtitle.nativeElement.value);
    blog.setDestination(this.destination.nativeElement.value);

    const startDateSplit = this.startDate.nativeElement.value.split('/');
    const startStamp = new Timestamp();
    startStamp.setSeconds(new Date(startDateSplit[2], startDateSplit[1] - 1, startDateSplit[0]).getTime() / 1000);
    blog.setStartdate(startStamp);

    const endDateSplit = this.endDate.nativeElement.value.split('/');
    const endStamp = new Timestamp();
    endStamp.setSeconds(new Date(endDateSplit[2], endDateSplit[1] - 1, endDateSplit[0]).getTime() / 1000);
    blog.setEnddate(endStamp);

    blog.setDescription(this.description.nativeElement.value);
    blog.setBlogimageurl(this.imagelink.nativeElement.value);
    blog.setAuthor(this.jwtService.getUsernameFromJWT());
    this.dialogRef.close(blog);
  }
}
