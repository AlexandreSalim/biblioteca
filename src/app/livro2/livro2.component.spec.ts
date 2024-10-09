import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livro2Component } from './livro2.component';

describe('Livro2Component', () => {
  let component: Livro2Component;
  let fixture: ComponentFixture<Livro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Livro2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Livro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
