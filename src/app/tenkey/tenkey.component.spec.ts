import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenkeyComponent } from './tenkey.component';

describe('TenkeyComponent', () => {
  let component: TenkeyComponent;
  let fixture: ComponentFixture<TenkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenkeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
