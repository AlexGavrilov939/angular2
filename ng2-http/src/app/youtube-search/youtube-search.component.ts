/**
 * YouTubeSearchComponent is a tiny app that will autocomplete search YouTube.
 */
import {
    Component,
    Injectable,
    OnInit,
    ElementRef,
    EventEmitter,
    Inject
} from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { SearchResult } from './models/SearchResult';

@Component({
    selector: 'app-youtube-search',
    template: `<div class='container'>
        <div class='page-header'>
            <h1>YouTube Search</h1>
        </div>

        <div class="row">
            <div class="input-group input-group-lg col-md-12">
              <search-box (loading)="loading = $event" (results)="updateResults($event)"></search-box>
            </div>
        </div>

        <div class="row">
            <search-result *ngFor="let result of results" [result]="result"></search-result>
        </div>
    </div>`
})

export class YoutubeSearchComponent implements OnInit {

    results: Array<SearchResult>;

    constructor() {}

    updateResults(results: Array<SearchResult>): void {
        this.results = results;
    }

    ngOnInit() {}
}
