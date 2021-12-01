import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cards: Card[] = [];
  lists: string[] = ["To-do", "In progress", "Done"];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCards();

    this.apiService.cardChanged.subscribe(() => {
      this.getCards();
    })
  }

  getCards() {
    this.apiService.getCardsFromServer().subscribe((data) => {
      this.cards = data.map(card => {
        return new Card(
          card.id,
          card.titulo,
          card.conteudo,
          this.apiService.lists.indexOf(card.lista))
      })
    })
  }

  getCardsInList(index: number): Card[] {
    return this.cards.filter((card) => { return card.list == index })
  }

}
