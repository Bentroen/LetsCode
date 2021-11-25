import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistItemEditComponent } from './playlist-item-edit.component';

describe('PlaylistItemEditComponent', () => {
  let component: PlaylistItemEditComponent;
  let fixture: ComponentFixture<PlaylistItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistItemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
