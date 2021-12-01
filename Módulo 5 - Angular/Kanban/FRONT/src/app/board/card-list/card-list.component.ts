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
  @Input() cards: Card[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
