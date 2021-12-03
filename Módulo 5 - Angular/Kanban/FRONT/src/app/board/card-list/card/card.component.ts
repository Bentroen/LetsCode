import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/app/models/card.model';
import { ApiService } from 'src/app/services/api.service';
import { NewCardComponent } from '../../new-card/new-card.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id!: number;
  @Input() listId!: number;
  @Input() card!: Card;

  isEditOpen!: boolean;

  cardForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  editCard(): void {
    this.isEditOpen = true;
    this.cardForm.setValue({
      "name": this.card.name,
      "description": this.card.description,
    });
  }

  cancelEdit(): void {
    this.isEditOpen = false;
  }

  saveCard(): void {
    this.isEditOpen = false;

    let newCard = <Card>{ ...this.card }
    newCard.name = this.cardForm.value.name;
    newCard.description = this.cardForm.value.description;

    this.apiService.updateCardOnServer(this.card.uuid, newCard).subscribe((p) => {
      this.apiService.cardChanged.next(p);
    })
  }

  deleteCard(): void {
    this.apiService.deleteCardFromServer(this.card.uuid).subscribe((p) => {
      this.apiService.cardChanged.next(p);
    })
  }

  moveCard(targetList: number): void {
    let newCard = <Card>{ ...this.card };
    newCard.list = targetList;

    this.apiService.updateCardOnServer(this.card.uuid, newCard).subscribe((p) => {
      this.apiService.cardChanged.next(p);
    })
  }

  moveCardLeft(): void {
    this.moveCard(this.listId - 1);
  }

  moveCardRight(): void {
    this.moveCard(this.listId + 1);
  }

}
