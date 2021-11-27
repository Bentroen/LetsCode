import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Array<Card> = [];

  constructor() { }

  ngOnInit(): void {
    let card = new Card("Test", "This is a test description!");
    this.cards.push(card);
    console.log(this.cards);
  }

}
