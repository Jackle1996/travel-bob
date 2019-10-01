import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../services/blogpost.service';
import { Blogpost, Blog } from '../../../../api/grpc-web-ts/blogposts_pb';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';
import { BlogpostdialogComponent } from '../blogpostdialog/blogpostdialog.component';
import { BlogService } from '../services/blog.service';
import { JwtService } from '../services/jwt.service';

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
  private blogs: Blog[];

  constructor(private route: ActivatedRoute,
              private blogpostService: BlogpostService,
              private blogService: BlogService,
              private dialog: MatDialog,
              private jwtService: JwtService) {
    this.blogPosts = [];
    this.blogs = [];
    this.route.paramMap.subscribe(params => {
       this.blogId = Number(params.get('blogid'));
       console.log('blogid=', this.blogId);
    });
    this.updateBlogs();
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

  updateBlogs() {
    this.blogService.getBlogs((posts: Blog[]) => this.assignBlogs(posts));
  }

  private assignBlogs(blogs: Blog[]) {
    this.blogs = blogs;
  }

  checkIfYourBlog() {
    if (this.jwtService.isUserLoggedIn()) {
      const blog = this.blogs.find((x) => x.getId() === this.blogId);
      if (blog) {
        return blog.getAuthor() === this.jwtService.getUsernameFromJWT();
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}
