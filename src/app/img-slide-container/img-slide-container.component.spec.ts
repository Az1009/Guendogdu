import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSlideContainerComponent } from './img-slide-container.component';

describe('ImgSlideContainerComponent', () => {
  let component: ImgSlideContainerComponent;
  let fixture: ComponentFixture<ImgSlideContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgSlideContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSlideContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
