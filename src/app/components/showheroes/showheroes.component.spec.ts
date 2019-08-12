import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowheroesComponent } from './showheroes.component';

describe('ShowheroesComponent', () => {
  let component: ShowheroesComponent;
  let fixture: ComponentFixture<ShowheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
