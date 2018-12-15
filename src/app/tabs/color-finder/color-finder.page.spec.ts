import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFinderPage } from './color-finder.page';

describe('ColorFinderPage', () => {
  let component: ColorFinderPage;
  let fixture: ComponentFixture<ColorFinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorFinderPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorFinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
