import { CountryRoot } from './../../form/country-root/country-root.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CountryRoot', () => {
  let component: CountryRoot;
  let fixture: ComponentFixture<CountryRoot>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryRoot]
    });
    fixture = TestBed.createComponent(CountryRoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
