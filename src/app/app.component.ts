import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  url = `https://jsonplaceholder.typicode.com/posts`;
  data = null;

  constructor(private http: HttpClient) {
    this.data = this.http.get(this.url).pipe(tap((data) => console.log(data)));
  }

  rowClick(val) {
    console.log(val)
  }
}
