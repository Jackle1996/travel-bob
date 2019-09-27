import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostviewComponent } from './blogpostview.component';

describe('BlogpostviewComponent', () => {
  let component: BlogpostviewComponent;
  let fixture: ComponentFixture<BlogpostviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
