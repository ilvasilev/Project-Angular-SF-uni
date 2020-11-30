import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../../interfaces'

@Component({
  selector: 'app-article-card-template',
  templateUrl: './article-card-template.component.html',
  styleUrls: ['./article-card-template.component.css']
})
export class ArticleCardTemplateComponent implements OnInit {

  @Input() article: IArticle;

  constructor() { }

  ngOnInit(): void {
  }

}
