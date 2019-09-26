import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsummaryComponent } from '../blogsummary/blogsummary.component';
import { BlogviewComponent } from '../blogview/blogview.component';

const routes: Routes = [
  { path: '', component: BlogsummaryComponent },
  { path: 'blogview', component: BlogviewComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
