import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsummaryComponent } from './blogsummary.component';

describe('BlogsummaryComponent', () => {
  let component: BlogsummaryComponent;
  let fixture: ComponentFixture<BlogsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
