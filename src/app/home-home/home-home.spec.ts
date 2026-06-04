import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHome } from './home-home';

describe('HomeHome', () => {
  let component: HomeHome;
  let fixture: ComponentFixture<HomeHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHome],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
