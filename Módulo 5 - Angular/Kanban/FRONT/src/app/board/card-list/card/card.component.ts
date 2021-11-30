import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id!: number;
  @Input() listId!: number;
  @Input() card!: Card;

  @Output() onDelete = new EventEmitter<any>();

  isEditOpen!: boolean;

  cardForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor() {
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

  saveCard(): void {
    this.isEditOpen = false;
    this.card.name = this.cardForm.value.name;
    this.card.description = this.cardForm.value.description;
  }

  deleteCard(): void {
    this.onDelete.emit();
  }

}
