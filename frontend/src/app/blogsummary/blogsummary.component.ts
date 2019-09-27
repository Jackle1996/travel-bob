import { Component, OnInit, Inject } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../../../../api/grpc-web-ts/blogposts_pb';
import { BlogdialogComponent } from '../blogdialog/blogdialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-blogsummary',
  templateUrl: './blogsummary.component.html',
  styleUrls: ['./blogsummary.component.css']
})
export class BlogsummaryComponent implements OnInit {
  private blogs: Blog[];
  private dialogRef: MatDialogRef<BlogdialogComponent>;

  constructor(private blogService: BlogService, public  dialog: MatDialog) {
    this.blogService.getBlogs((posts: Blog[]) => this.assignBlogs(posts));
  }

  ngOnInit() {
  }

  getAllBlogs(): Blog[] {
    return this.blogs;
  }

  private assignBlogs(blogs: Blog[]) {
    console.log('blogs= ', blogs);
    this.blogs = blogs;
  }

  createDialog() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialog.open(BlogdialogComponent, {
      width: '80%',
    });
  }

  createBlog() {
    this.createDialog();
    this.dialogRef.componentInstance.setFormTitle('Create Blog');
    this.dialogRef.afterClosed().subscribe(result => {
      this.blogService.createBlog(result);
    });
  }

  editBlog() {
    this.createDialog();
    this.dialogRef.componentInstance.setFormTitle('Edit Blog');
    this.dialogRef.componentInstance.setEditValues(this.blogs[1]);
    this.dialogRef.afterClosed().subscribe(result => {
      this.blogService.editBlog(result);
    });
  }

  deleteBlog(blogId: number) {
    this.blogService.deleteBlog(blogId);
  }
}
