import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/Articles/articles.service';
import { AuthService } from 'src/app/User/auth.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  id = '';
  article = null;
  comments = [];  
  comment = ''; 
  commentId = '';
  localId = localStorage.getItem('id')
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  constructor(private http: HttpClient,
    private activated: ActivatedRoute,
    private _articles: ArticlesService,
    public auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get("id");
    
    this._articles.loadArticleComments(this.id)
    .subscribe(
      res => {
        this.article = res
        this.selectedValue = res.rating;
        this.comments = res.comments
        console.log(this.article)
      },      
      err => console.log(err)
    )    
  }

  onSubmit(form: NgForm) {
    this.comment = form.value.comment;
    this.id = this.activated.snapshot.paramMap.get("id");    

    this._articles.createComment(this.comment, this.id)
    .subscribe(
      res => {
        this.ngOnInit()       
      },
      err => console.log(err)
    )
    form.resetForm();
  }

  onLike(commentId) {
    this.commentId = commentId
    this._articles.likeComment(this.commentId).subscribe(
      res => {
        this.ngOnInit()
      },
      err => console.log(err)
    )
  }

  onDelete() {
    this.id = this.activated.snapshot.paramMap.get("id")
    this._articles.deleteArticle(this.id)
    .subscribe(
      res => this._router.navigate(['/']),
      err => console.log(err)
    )    
  }

  countStar(star) {
    this.selectedValue = star;
    this.id = this.activated.snapshot.paramMap.get("id");
    this._articles.updateRating(this.id, this.selectedValue.toString())
    .subscribe(
      res => {
        this.ngOnInit()
      },
      err => console.log(err  )
    )    
  }
}
