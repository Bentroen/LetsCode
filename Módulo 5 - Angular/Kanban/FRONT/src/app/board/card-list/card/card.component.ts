import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name!: string;
  @Input() description!: string;

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
      "name": this.name,
      "description": this.description,
    });
  }

  saveCard(): void {
    this.isEditOpen = false;
    this.name = this.cardForm.value.name;
    this.description = this.cardForm.value.description;
  }

  deleteCard(): void {
    this.onDelete.emit();
  }

}
