import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogsummary',
  templateUrl: './blogsummary.component.html',
  styleUrls: ['./blogsummary.component.css']
})
export class BlogsummaryComponent implements OnInit {
  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
  }
}
