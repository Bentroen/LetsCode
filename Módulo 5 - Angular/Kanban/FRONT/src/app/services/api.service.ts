import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from '../models/card.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = "http://localhost:5000/cards";

  lists: string[] = ["ToDo", "Doing", "Done"]

  constructor(private http: HttpClient, private authService: AuthService) { }

  cardChanged = new Subject();

  getHttpHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.currentUserToken
    });
    return {'headers': headers}
  }

  toApiCard(card: Card) {
    return {
      id: card.uuid,
      titulo: card.name,
      conteudo: card.description,
      lista: this.lists[card.list],
    }
  }

  createCardOnServer(name: string, description: string, listId: number) {
    let body = {
      titulo: name,
      conteudo: description,
      lista: this.lists[listId]
    }
    return this.http.post<Card[]>(this.baseUrl, body, this.getHttpHeaders());
  }

  getCardsFromServer() {
    return this.http.get<Array<any>>(this.baseUrl, this.getHttpHeaders());
  }

  updateCardOnServer(id: string, card: Card) {
    let body = this.toApiCard(card);
    return this.http.put<Card>(`${this.baseUrl}/${id}`, body, this.getHttpHeaders());
  }

  deleteCardFromServer(id: string) {
    return this.http.delete<Card[]>(`${this.baseUrl}/${id}`, this.getHttpHeaders());
  }

}
