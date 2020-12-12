import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../Articles/articles.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articleLengthQuery = '?length='
  articlelengthParam = '3';
  articles = [];

  constructor(private _article: ArticlesService) { }

  ngOnInit(): void {

    this._article.loadArticles(`${this.articleLengthQuery}${this.articlelengthParam}`)
    .subscribe(
      res => this.articles = res,
      err => console.log(err)
    )
  }

  changeParams(articleParam) {
    this.articlelengthParam = articleParam;
    this.ngOnInit();
  }

}