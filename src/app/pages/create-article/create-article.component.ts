import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  title = '';
  content = '';
  imageUrl = '';
  
  constructor() { }

  ngOnInit(): void {
  }  

  onSubmit(form: NgForm) {
    this.title = form.value.username;
    this.content = form.value.password;
    this.imageUrl = form.value.imageUrl;

    form.resetForm();
  }

}