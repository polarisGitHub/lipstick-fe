import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LipstickFinderPage } from './lipstick-finder.page';

describe('LipstickFinderPage', () => {
  let component: LipstickFinderPage;
  let fixture: ComponentFixture<LipstickFinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LipstickFinderPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LipstickFinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
