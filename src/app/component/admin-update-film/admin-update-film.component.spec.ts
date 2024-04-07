import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateFilmComponent } from './admin-update-film.component';

describe('AdminUpdateFilmComponent', () => {
  let component: AdminUpdateFilmComponent;
  let fixture: ComponentFixture<AdminUpdateFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUpdateFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
