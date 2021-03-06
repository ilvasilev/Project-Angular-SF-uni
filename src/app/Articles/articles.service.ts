import { Injectable } from '@angular/core';
import { IArticle } from '../interfaces/index';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ArticlesService {

  private _articlesUrl = 'http://localhost:9999/api/origami';
  private _commentsUrl = 'http://localhost:9999/api/comment';

  constructor(private http: HttpClient) { }

  loadArticles(length): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(`${this._articlesUrl}${length}`);
  }

  createArticle(title, content, imageUrl) {
    return this.http.post<any>(this._articlesUrl, {title, content, imageUrl}, {observe: 'response'})
  }

  loadSingleArticle(id) {
    return this.http.get<any>(`${this._articlesUrl}/${id}`);
  }

  loadArticleComments(id) {
    return this.http.get<any>(`${this._articlesUrl}/${id}/comments`);
  }

  createComment(comment, articleId) {
    return this.http.post<any>(this._commentsUrl, {comment, articleId}, {observe: 'response'})
  }

  likeComment(commentId) {
    return this.http.put<any>(this._commentsUrl, {commentId}, {observe: 'response'})
  }

  deleteArticle(id) {
    return this.http.delete<any>(`${this._articlesUrl}/${id}`, id)
  }

  updateArticle(id, title, content, imageUrl) {
    return this.http.put<any>(`${this._articlesUrl}/${id}`, {title, content, imageUrl}, {observe: 'response'})
  }

  updateRating(id, value) {
    return this.http.put<any>(`${this._articlesUrl}/rating/${id}`, {value}, {observe: 'response'})
  }
}
