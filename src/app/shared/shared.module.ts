import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardTemplateComponent } from './article-card-template/article-card-template.component';
import { ArticleCardComponent } from './article-card/article-card.component';


@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticleCardTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleCardComponent,
    ArticleCardTemplateComponent
  ]
})
export class SharedModule { }
