import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkGraphComponent } from './social-network-graph.component';

describe('SocialNetworkGraphComponent', () => {
  let component: SocialNetworkGraphComponent;
  let fixture: ComponentFixture<SocialNetworkGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
