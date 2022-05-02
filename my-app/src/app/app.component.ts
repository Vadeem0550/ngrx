import {Component} from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  updateAt?: number;

  constructor(private _store: Store) {
  }


  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase() {
    this.updateAt = Date.now()
    this.counter++;
    // this._store.dispatch(increase());
  }

  decrease() {
    this.updateAt = Date.now()
    this.counter--;
    // this._store.dispatch(decrease());

  }

  clear() {
    this.updateAt = Date.now()
    this.counter = 0;
    // this._store.dispatch(clear());

  }
}
