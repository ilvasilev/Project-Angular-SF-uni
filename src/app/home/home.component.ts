import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../Articles/articles.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articleLengthQuery = '?length='   
  articles = [];

  constructor(private _article: ArticlesService) { }

  ngOnInit(): void {
    
    if(!localStorage.getItem('articleLength')) {
      localStorage.setItem('articleLength', '3')
    }

    this._article.loadArticles(`${this.articleLengthQuery}${localStorage.getItem('articleLength')}`)
    .subscribe(
      res => this.articles = res,
      err => console.log(err)
    )
  }

  changeParams(articleParam) {    
    localStorage.setItem('articleLength', `${articleParam}`)
    this.ngOnInit();
  }

}