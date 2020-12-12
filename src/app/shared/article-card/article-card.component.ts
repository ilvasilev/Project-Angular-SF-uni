import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../Articles/articles.service';
import { IArticle } from 'src/app/interfaces';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  articleList: IArticle[];

  ngOnInit(): void {
    this.articlesService.loadArticles().subscribe(articleList =>{
      this.articleList = articleList;
    })
  }

}
