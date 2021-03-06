import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchResult } from '../../models/SearchResult';
import { YoutubeApiService } from '../../services/YoutubeApiService';

@Component({
  selector: 'search-box',
  //templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  template: `<input type="text" class="form-control" placeholder="Search" autofocus>`
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<Array<SearchResult>> = new EventEmitter<Array<SearchResult>>();

  constructor(private youtube: YoutubeApiService, private el: ElementRef) { }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
        .map((e: any) => e.target.value) // extract the value of the input
        .filter((text: string) => text.length > 1) // filter out if empty
        .debounceTime(250) // only once every 250ms
        .do(() => this.loading.next(true)) // enable loading
        // search, discarding old events if new input comes in
        .map((query: string) => this.youtube.search(query))
        .switch() // -> ignore all search events but the most recent
        // act on the return of the search
        .subscribe(
            (results: Array<SearchResult>) => { // on sucesss
              this.loading.next(false);
              this.results.next(results);
            },
            (err: any) => {
              console.log(err);
              this.loading.next(false);
            },
            () => { // on completion
              this.loading.next(false);
            }
        )
  }

}
