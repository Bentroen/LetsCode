import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() id!: number;
  @Input() title!: string;

  cards: Array<Card> = [];

  constructor() { }

  ngOnInit(): void {
    let card = new Card("Test", "This is a test description!");
    this.cards.push(card);
    let card2 = new Card("Test2", "This is another test description!");
    this.cards.push(card2);
    console.log(this.cards);
  }

  deleteCard(index: number): void {
    this.cards.splice(index, 1);
  }
}
