import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardTemplateComponent } from './article-card-template.component';

describe('ArticleCardTemplateComponent', () => {
  let component: ArticleCardTemplateComponent;
  let fixture: ComponentFixture<ArticleCardTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCardTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
