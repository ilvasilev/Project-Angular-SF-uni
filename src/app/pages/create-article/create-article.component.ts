import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/Articles/articles.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  title = '';
  content = '';
  imageUrl = '';  
  
  constructor(private _articleSefice: ArticlesService,
              private _router: Router) { }

  ngOnInit(): void {    
  }  

  onSubmit(form: NgForm) {
    this.title = form.value.title;
    this.content = form.value.content;
    this.imageUrl = form.value.imageUrl;

    this._articleSefice.createArticle(this.title, this.content, this.imageUrl)
    .subscribe(
      res => {
        console.log(res)
        this._router.navigate(['/']);
      },
      err => console.log(err)
    )


    form.resetForm();
  }

}