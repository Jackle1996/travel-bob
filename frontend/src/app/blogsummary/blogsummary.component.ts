import { Component, OnInit, Inject } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../../../../api/grpc-web-ts/blogposts_pb';
import { BlogformComponent } from '../blogform/blogform.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-blogsummary',
  templateUrl: './blogsummary.component.html',
  styleUrls: ['./blogsummary.component.css']
})
export class BlogsummaryComponent implements OnInit {
  private blogs: Blog[];
  private dialogRef: MatDialogRef<BlogformComponent>;

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

  createBlog() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialog.open(BlogformComponent, {
      width: '500px'
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
    });

    return this.dialogRef;
  }
}
