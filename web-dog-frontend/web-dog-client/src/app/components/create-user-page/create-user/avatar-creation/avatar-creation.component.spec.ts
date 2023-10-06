import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCreationComponent } from './avatar-creation.component';

describe('AvatarCreationComponent', () => {
  let component: AvatarCreationComponent;
  let fixture: ComponentFixture<AvatarCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarCreationComponent]
    });
    fixture = TestBed.createComponent(AvatarCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
