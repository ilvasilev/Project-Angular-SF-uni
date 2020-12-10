import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../Articles/articles.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles = [];

  constructor(private _article: ArticlesService) { }

  ngOnInit(): void {

    this._article.loadArticles()
    .subscribe(
      res => this.articles = res,
      err => console.log(err)
    )

  }

}
