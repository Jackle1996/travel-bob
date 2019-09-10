import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { BlogsummaryComponent } from './blogsummary/blogsummary.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogviewComponent,
    BlogsummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
