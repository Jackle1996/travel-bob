import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../services/blogpost.service';
import { Blogpost } from '../../../../api/grpc-web-ts/blogposts_pb';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})

export class BlogviewComponent implements OnInit {
  private blogId: number;
  private blogPosts: Blogpost[];
  private deleteDialog: MatDialogRef<DeletedialogComponent>;

  constructor(private route: ActivatedRoute, private blogpostService: BlogpostService, private dialog: MatDialog) {
    this.blogPosts = [];
    this.route.paramMap.subscribe(params => {
       this.blogId = Number(params.get('blogid'));
       console.log('blogid=', this.blogId)
    });
    this.updateBlogs();
  }

  ngOnInit() {
  }

  updateBlogs() {
    this.blogpostService.getBlogPosts(this.blogId, (posts: Blogpost[]) => this.assignBlogposts(posts));
  }

  getAllBlogposts(): Blogpost[] {
    return this.blogPosts;
  }

  private assignBlogposts(blogPosts: Blogpost[]) {
    this.blogPosts = blogPosts;
  }

  createBlogPost() {

  }

  editBlogPost() {

  }

  deleteBlogPost(blogId: number) {
    if (this.deleteDialog) {
      this.deleteDialog.close();
    }
    this.deleteDialog = this.dialog.open(DeletedialogComponent, {});
    this.deleteDialog.afterClosed().subscribe(result => {
      if (result) {
        this.blogpostService.deleteBlogPost(blogId, () => this.updateBlogs());
      }
    });
  }
}
