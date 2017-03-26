import { TestBed, inject } from '@angular/core/testing';

import { UserTrackerService } from './user-tracker.service';

describe('UserTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTrackerService]
    });
  });

  it('should ...', inject([UserTrackerService], (service: UserTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
