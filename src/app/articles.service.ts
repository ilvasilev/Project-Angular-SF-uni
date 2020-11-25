import { Injectable } from '@angular/core';
import { IArticle } from './interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ArticlesService {

  constructor(private http: HttpClient) { }

  loadArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>('http://localhost:9999/api/origami');
  }
}
