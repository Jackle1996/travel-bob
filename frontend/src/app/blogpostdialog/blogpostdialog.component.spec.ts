import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostdialogComponent } from './blogpostdialog.component';

describe('BlogpostdialogComponent', () => {
  let component: BlogpostdialogComponent;
  let fixture: ComponentFixture<BlogpostdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
