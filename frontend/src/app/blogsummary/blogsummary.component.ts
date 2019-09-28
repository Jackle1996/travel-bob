import { Component, OnInit, Inject } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../../../../api/grpc-web-ts/blogposts_pb';
import { BlogdialogComponent } from '../blogdialog/blogdialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';

@Component({
  selector: 'app-blogsummary',
  templateUrl: './blogsummary.component.html',
  styleUrls: ['./blogsummary.component.css']
})
export class BlogsummaryComponent implements OnInit {
  private blogs: Blog[];
  private blogDialog: MatDialogRef<BlogdialogComponent>;
  private deleteDialog: MatDialogRef<DeletedialogComponent>;

  constructor(private blogService: BlogService, public  dialog: MatDialog) {
    this.updateBlogs();
  }

  ngOnInit() {
  }

  updateBlogs() {
    this.blogService.getBlogs((posts: Blog[]) => this.assignBlogs(posts));
  }

  getAllBlogs(): Blog[] {
    return this.blogs;
  }

  private assignBlogs(blogs: Blog[]) {
    this.blogs = blogs;
  }

  createDialog() {
    if (this.blogDialog) {
      this.blogDialog.close();
    }
    this.blogDialog = this.dialog.open(BlogdialogComponent, {
      width: '80%',
    });
  }

  createBlog() {
    this.createDialog();
    this.blogDialog.componentInstance.setFormTitle('Create Blog');
    this.blogDialog.afterClosed().subscribe(result => {
      if (result) {
        this.blogService.createBlog(result, () => this.updateBlogs());
      }
    });
  }

  editBlog(blog: Blog) {
    this.createDialog();
    this.blogDialog.componentInstance.setFormTitle('Edit Blog');
    this.blogDialog.componentInstance.setEditValues(blog);
    this.blogDialog.afterClosed().subscribe(result => {
      if (result) {
        this.blogService.editBlog(result, () => this.updateBlogs());
      }
    });
  }

  deleteBlog(blogId: number) {
    if (this.deleteDialog) {
      this.deleteDialog.close();
    }
    this.deleteDialog = this.dialog.open(DeletedialogComponent, {});
    this.deleteDialog.afterClosed().subscribe(result => {
      if (result) {
        this.blogService.deleteBlog(blogId, () => this.updateBlogs());
      }
    });
  }
}
