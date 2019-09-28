import { TestBed } from '@angular/core/testing';

import { BlogposttransferService } from './blogposttransfer.service';

describe('BlogposttransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogposttransferService = TestBed.get(BlogposttransferService);
    expect(service).toBeTruthy();
  });
});
