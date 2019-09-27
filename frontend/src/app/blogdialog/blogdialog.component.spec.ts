import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdialogComponent } from './blogdialog.component';

describe('BlogformComponent', () => {
  let component: BlogdialogComponent;
  let fixture: ComponentFixture<BlogdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
