import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormAffinityTolerationsComponent } from './form-affinity-tolerations.component';

describe('FormAffinityTolerationsComponent', () => {
  let component: FormAffinityTolerationsComponent;
  let fixture: ComponentFixture<FormAffinityTolerationsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormAffinityTolerationsComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAffinityTolerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
