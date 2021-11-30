import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private subject = new Subject<any>();

  moveCard(card: Card, targetListId: number) {
    this.subject.next({ card, targetListId })
  }

  onChanged(): Observable<any> {
    return this.subject.asObservable();
  }

}
