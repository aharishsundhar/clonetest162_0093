import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispathmaterailComponent } from './dispathmaterail.component';

describe('DispathmaterailComponent', () => {
  let component: DispathmaterailComponent;
  let fixture: ComponentFixture<DispathmaterailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispathmaterailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispathmaterailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});