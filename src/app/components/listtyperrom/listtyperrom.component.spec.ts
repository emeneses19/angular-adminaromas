import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtyperromComponent } from './listtyperrom.component';

describe('ListtyperromComponent', () => {
  let component: ListtyperromComponent;
  let fixture: ComponentFixture<ListtyperromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtyperromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtyperromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
