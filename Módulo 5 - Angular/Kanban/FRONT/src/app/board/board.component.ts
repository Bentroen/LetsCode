import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }
  lists: string[] = ["To-do", "In progress", "Done"];

  ngOnInit(): void {
  }

}
