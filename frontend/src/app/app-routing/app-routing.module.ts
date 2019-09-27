import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsummaryComponent } from '../blogsummary/blogsummary.component';
import { BlogviewComponent } from '../blogview/blogview.component';
import { BlogpostviewComponent } from '../blogpostview/blogpostview.component';

const routes: Routes = [
  { path: '', component: BlogsummaryComponent },
  { path: 'blog/:blogid', component: BlogviewComponent },
  { path: 'blog/:blogid/post/:postid', component: BlogpostviewComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
