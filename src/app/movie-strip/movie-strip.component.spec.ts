import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStripComponent } from './movie-strip.component';

describe('MovieStripComponent', () => {
  let component: MovieStripComponent;
  let fixture: ComponentFixture<MovieStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
