import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResumeEnComponent } from './resume-en.component';

describe('ResumeEnComponent', () => {
  let component: ResumeEnComponent;
  let fixture: ComponentFixture<ResumeEnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
