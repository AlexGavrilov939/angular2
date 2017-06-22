import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-simple-http',
  styleUrls: ['./simple-http.component.css'],
  //templateUrl: './simple-http.component.html'
  template: `
  <h2>Basic Request</h2>
  <button type="button" (click)="makeRequest()">Make Request</button>
  <div *ngIf="loading">loading...</div>
  <pre>{{data | json}}</pre>`
})
export class SimpleHttpComponent implements OnInit {

    data: Object;
    loading: boolean = false;

    constructor(private http: Http) { }

    makeRequest(): void {
        this.loading = true;
        this.http.request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            })
    }


    makePost(): void {
        this.loading = true; this.http.post( //PUT / PATCH / DELETE / HEAD
            'http://jsonplaceholder.typicode.com/posts',
            JSON.stringify({
                body: 'bar',
                title: 'foo',
                userId: 1
            }))
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }

    makeHeaders(): void {
        let headers: Headers = new Headers();
        let opts: RequestOptions = new RequestOptions();

        headers.append('X-API-TOKEN', 'ng-book');
        opts.headers = headers;

        this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
            .subscribe((res: Response) => {
                this.data = res.json();
            });
    }

  ngOnInit() {
  }

}
