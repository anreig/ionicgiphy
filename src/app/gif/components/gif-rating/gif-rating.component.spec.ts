import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifRatingComponent } from './gif-rating.component';

describe('GifRatingComponent', () => {
  let component: GifRatingComponent;
  let fixture: ComponentFixture<GifRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
