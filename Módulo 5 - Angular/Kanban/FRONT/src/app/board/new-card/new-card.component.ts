import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/app/models/card.model';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
  }

  addCard() {
    let card: Card = {
      "name": this.cardForm.value.name,
      "description": this.cardForm.value.description
    }
    this.boardService.moveCard(card, 0);
    this.cardForm.reset();
  }

}
