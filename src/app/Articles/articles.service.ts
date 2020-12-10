import { Injectable } from '@angular/core';
import { IArticle } from '../interfaces/index';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ArticlesService {

  private _homeArticlesUrl = 'http://localhost:9999/api/origami'

  constructor(private http: HttpClient) { }

  loadArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this._homeArticlesUrl);
  }
}
