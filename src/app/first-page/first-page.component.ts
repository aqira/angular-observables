import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent implements OnInit {
  public title: string = "";
  
  ngOnInit(): void {
    const customObservable = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        console.log("first page : " + count.toString());
        count++;
      }, 1000);
    });

    customObservable.subscribe((data) => (this.title = data.toString()));
  }
}
