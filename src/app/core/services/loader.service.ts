import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private static requestsCount: number = 0;
  private static loader = new BehaviorSubject<boolean>(false);

  constructor() {}
  // Add a static getter for loaderVisibility
  static get loaderVisibility(): Observable<boolean> {
    return this.loader.asObservable();
  }
  static onRequestStart(): void {
    this.requestsCount++;
    if (this.requestsCount > 0) {
      this.loader.next(true);
    }
  }
  static onRequestFinish(): void {
    this.requestsCount--;
    if (this.requestsCount === 0) {
      this.loader.next(false);
    }
  }
}
