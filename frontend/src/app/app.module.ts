import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// blog stuff
import { AppComponent } from './app.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { BlogsummaryComponent } from './blogsummary/blogsummary.component';
import { BlogpostviewComponent } from './blogpostview/blogpostview.component';
// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

// flex layout for responsive design
import { FlexLayoutModule } from '@angular/flex-layout';
// routing module
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BlogdialogComponent } from './blogdialog/blogdialog.component';
import { DeletedialogComponent } from './deletedialog/deletedialog.component';
import { BlogpostdialogComponent } from './blogpostdialog/blogpostdialog.component';
import { LogindialogComponent } from './logindialog/logindialog.component';
import { RegisterdialogComponent } from './registerdialog/registerdialog.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogviewComponent,
    BlogsummaryComponent,
    BlogpostviewComponent,
    BlogdialogComponent,
    DeletedialogComponent,
    BlogpostdialogComponent,
    LogindialogComponent,
    RegisterdialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'en' },
],
  bootstrap: [AppComponent],
  entryComponents: [
    BlogdialogComponent,
    BlogpostdialogComponent,
    DeletedialogComponent,
    LogindialogComponent,
    RegisterdialogComponent
  ]
})
export class AppModule { }
