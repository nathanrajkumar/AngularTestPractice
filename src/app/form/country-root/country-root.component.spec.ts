/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountryRoot } from './country-root.component';

describe('CountryRoot', () => {
  let component: CountryRoot;
  let fixture: ComponentFixture<CountryRoot>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryRoot ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryRoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
