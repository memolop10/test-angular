import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetalleComponent } from './heroes-detalle.component';

describe('HeroesDetalleComponent', () => {
  let component: HeroesDetalleComponent;
  let fixture: ComponentFixture<HeroesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
