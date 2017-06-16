import { Component, OnInit, Input } from '@angular/core';
import ArticleModel from 'app/models/ArticleModel';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
class ArticleComponent implements OnInit {

  @Input() article: ArticleModel;

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {}

}

export default ArticleComponent;
