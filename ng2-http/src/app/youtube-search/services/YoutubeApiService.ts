import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/SearchResult';

import * as _ from 'lodash';

export const YOUTUBE_API_KEY:string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export const YOUTUBE_API_URL:string = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YoutubeApiService {
    constructor(private http:Http,
                @Inject(YOUTUBE_API_KEY) private apiKey:string,
                @Inject(YOUTUBE_API_URL) private apiUrl:string) {}

    search(query:string):Observable<Array<SearchResult>> {
        const queryParamsString:string = [
            `part=snippet`,
            `q=${query}`,
            `key=${this.apiKey}`,
            `type=video`,
            `maxResults=10`
        ].join('&');

        const queryUrl = `${this.apiUrl}?${queryParamsString}`;
        console.log('=API_URL:', this.apiUrl);
        console.log('=QUERY_URL:', queryUrl);
        return this.http.get(queryUrl)
            .map((response: Response) => {
                return (<any>response.json()).items.map(item => {
                    return new SearchResult({
                        id: _.get(item, 'id.videoId', null),
                        title: _.get(item, 'snippet.title', null),
                        description: _.get(item, 'snippet.description', null),
                        thumbnailUrl: _.get(item, 'snippet.thumbnails.high.url', null)
                    });
                });
            });
    }
}

export const YoutubeApiServiceInjectables:Array<any> = [
    {provide: YoutubeApiService, useClass: YoutubeApiService},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];