import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingEmailComponent } from './sending-email.component';

describe('SendingEmailComponent', () => {
  let component: SendingEmailComponent;
  let fixture: ComponentFixture<SendingEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
