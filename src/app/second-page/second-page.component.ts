import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css',
})
export class SecondPageComponent implements OnInit {
  public title: string = '';

  ngOnInit(): void {
    const customObservable = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        console.log("second page : " + count.toString());
        count++;
      }, 1000);
    });

    customObservable.subscribe((data) => (this.title = data.toString()));
  }
}
