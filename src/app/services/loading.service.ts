import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public readonly isLoading: Observable<boolean> = this._loading.asObservable();

  constructor() { }

  public show(): void {
    this._loading.next(true);
  }

  public hide(): void {
    this._loading.next(false);
  }
}
