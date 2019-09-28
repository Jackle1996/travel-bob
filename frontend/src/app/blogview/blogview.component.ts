import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../services/blogpost.service';
import { Blogpost } from '../../../../api/grpc-web-ts/blogposts_pb';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';
import { BlogpostdialogComponent } from '../blogpostdialog/blogpostdialog.component';
import { BlogposttransferService } from '../services/blogposttransfer.service';

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})

export class BlogviewComponent implements OnInit {
  private blogId: number;
  private blogPosts: Blogpost[];
  private blogpostDialog: MatDialogRef<BlogpostdialogComponent>;
  private deleteDialog: MatDialogRef<DeletedialogComponent>;

  constructor(private route: ActivatedRoute,
              private blogpostService: BlogpostService,
              private dialog: MatDialog,
              private transfer: BlogposttransferService) {
    this.blogPosts = [];
    this.route.paramMap.subscribe(params => {
       this.blogId = Number(params.get('blogid'));
       console.log('blogid=', this.blogId)
    });
    this.updateBlogposts();
  }

  ngOnInit() {
  }

  updateBlogposts() {
    this.blogpostService.getBlogPosts(this.blogId, (posts: Blogpost[]) => this.assignBlogposts(posts));
  }

  getAllBlogposts(): Blogpost[] {
    return this.blogPosts;
  }

  private assignBlogposts(blogPosts: Blogpost[]) {
    this.blogPosts = blogPosts;
    this.transfer.setBlogposts(this.blogPosts);
  }

  createDialog() {
    if (this.blogpostDialog) {
      this.blogpostDialog.close();
    }
    this.blogpostDialog = this.dialog.open(BlogpostdialogComponent, {
      width: '80%',
    });
  }

  createBlogPost() {
    this.createDialog();
    this.blogpostDialog.componentInstance.setFormTitle('Create Blogpost');
    this.blogpostDialog.componentInstance.setBlogId(this.blogId);
    this.blogpostDialog.afterClosed().subscribe(result => {
      if (result) {
        this.blogpostService.createBlogPost(result, () => this.updateBlogposts());
      }
    });
  }

  editBlogPost(blogpost: Blogpost) {
    this.createDialog();
    this.blogpostDialog.componentInstance.setFormTitle('Edit Blogpost');
    this.blogpostDialog.componentInstance.setBlogId(this.blogId);
    this.blogpostDialog.componentInstance.setEditValues(blogpost);
    this.blogpostDialog.afterClosed().subscribe(result => {
      if (result) {
        this.blogpostService.editBlogPost(result, () => this.updateBlogposts());
      }
    });
  }

  deleteBlogPost(blogId: number) {
    if (this.deleteDialog) {
      this.deleteDialog.close();
    }
    this.deleteDialog = this.dialog.open(DeletedialogComponent, {});
    this.deleteDialog.afterClosed().subscribe(result => {
      if (result) {
        this.blogpostService.deleteBlogPost(blogId, () => this.updateBlogposts());
      }
    });
  }
}
