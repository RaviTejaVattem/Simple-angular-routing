import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-child',
  template: `<pre><code>{{data  | async | json}}</code></pre>`,
})
export class ChildComponent {
  url = `https://jsonplaceholder.typicode.com/posts`;
  data = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    // {id: '3'}
    this.data = this.route.params.pipe(
      switchMap((val) => {
        return this.http.get(`${this.url}/${val.id}`);
      }),
      tap((val) => console.log(val))
    );
  }
}
