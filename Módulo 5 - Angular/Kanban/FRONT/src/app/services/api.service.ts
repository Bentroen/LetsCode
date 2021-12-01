import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = "http://localhost:3000/cards"; //"http://0.0.0.0:5000/";

  lists: string[] = ["ToDo", "Doing", "Done"]

  constructor(private http: HttpClient) { }

  cardChanged = new Subject();

  login(username: string, password: string) {
    return this.http.get(`${this.baseUrl}/login`);
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
    return this.http.post<Card[]>(this.baseUrl, body);
  }

  getCardsFromServer() {
    return this.http.get<Array<any>>(this.baseUrl);
  }

  updateCardOnServer(id: string, card: Card) {
    let body = this.toApiCard(card);
    return this.http.put<Card>(`${this.baseUrl}/${id}`, body);
  }

  deleteCardFromServer(id: string) {
    return this.http.delete<Card[]>(`${this.baseUrl}/${id}`);
  }

}
