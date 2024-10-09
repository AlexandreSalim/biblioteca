import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livro1Component } from './livro1.component';

describe('Livro1Component', () => {
  let component: Livro1Component;
  let fixture: ComponentFixture<Livro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Livro1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Livro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
