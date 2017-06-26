import {Injectable, Inject} from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

const ENDPOINT_SEARCH = 'https://api.spotify.com/v1/search';

@Injectable()
export class SpotifyService {

    constructor(@Inject(Http) public http: Http) {}

    searchByTrack(query: string) {
        let params: string = [
            `q=${query}`,
            `type=track`
        ].join('&');

        let queryURL: string = `${ENDPOINT_SEARCH}?${params}`;
        return this.http.request(queryURL).map(res => res.json());
    }
}