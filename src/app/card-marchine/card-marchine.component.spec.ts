import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarchineComponent } from './card-marchine.component';

describe('CardMarchineComponent', () => {
  let component: CardMarchineComponent;
  let fixture: ComponentFixture<CardMarchineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMarchineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMarchineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
