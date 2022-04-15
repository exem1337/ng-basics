import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyActions } from './store/myStore.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-basics';

  ngOnInit(): void {
    // fetch('https://fakestoreapi.com/products/')
    //   .then(res=>res.json())
    //   .then(json=>this.store.dispatch(MyActions.addCardItem(json)))
    this.store.dispatch(MyActions.loadItems());
  }

  constructor(private store: Store) {}
}
