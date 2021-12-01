import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/models/card.model';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() id!: number;
  @Input() title!: string;

  cards: Card[] = [];
  subscription!: Subscription;

  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
    let card = new Card("Test", "This is a test description!");
    this.cards.push(card);
    let card2 = new Card("Test2", "This is another test description!");
    this.cards.push(card2);
    console.log(this.cards);

    this.subscription = this.boardService.onChanged().subscribe(
      ({card, targetListId}) => {
        if (targetListId == this.id) {
          this.addCard(card);
        }
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  deleteCard(index: number): void {
    this.cards.splice(index, 1);
  }

}
