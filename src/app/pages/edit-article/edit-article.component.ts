import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/Articles/articles.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  title: string;
  content: string;
  imageUrl: string;
  id: string;
  article: any;

  constructor(private _articles: ArticlesService,
              private _router: Router,
              private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get("id");

    this._articles.loadArticleComments(this.id)
    .subscribe(
      res => this.article = res,      
      err => console.log(err)
    )

  }

  onSubmit(form: NgForm) {
    this.id = this.activated.snapshot.paramMap.get("id");
    this.title = form.value.title;
    this.content = form.value.content;
    this.imageUrl = form.value.imageUrl;    

    this._articles.updateArticle(this.id, this.title, this.content, this.imageUrl)
    .subscribe(
      res => {
        console.log(res)
        this._router.navigate([`/single-article/${this.id}`]);
      },
      err => console.log(err)
    )
    form.resetForm();
  }

}
