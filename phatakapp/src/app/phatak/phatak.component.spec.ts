import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhatakComponent } from './phatak.component';

describe('PhatakComponent', () => {
  let component: PhatakComponent;
  let fixture: ComponentFixture<PhatakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhatakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhatakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
