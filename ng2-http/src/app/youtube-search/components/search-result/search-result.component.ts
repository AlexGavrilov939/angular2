import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../../models/SearchResult';

@Component({
  selector: 'search-result',
  template: `
   <div class="col-sm-6 col-md-3">
      <div class="thumbnail">
        <img src="{{result.thumbnailUrl}}">
        <div class="caption">
          <h3>{{result.title}}</h3>
          <p>{{result.description}}</p>
          <p><a href="{{result.videoUrl}}"
                class="btn btn-default" role="button">
                Watch</a></p>
        </div>
      </div>
    </div>
`
})

export class SearchResultComponent implements OnInit {

  @Input() result: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
