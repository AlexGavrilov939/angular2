import { Component } from '@angular/core';
import ArticleModel from 'app/models/ArticleModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class AppComponent {

  articles: Array<ArticleModel>;

  constructor() {
    this.articles = [
      new ArticleModel('Angular 2', 'http://angular.io', 3),
      new ArticleModel('Fullstack', 'http://fullstack.io', 2),
      new ArticleModel('Angular Homepage', 'http://angular.io', 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push(new ArticleModel(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles():Array<ArticleModel> {
    return this.articles.sort((a: ArticleModel, b: ArticleModel) => b.votes - a.votes);
  }
}

export default AppComponent;
