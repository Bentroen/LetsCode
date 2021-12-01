import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/app/models/card.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  addCard(): void {
    this.apiService.createCardOnServer(this.form.value.name, this.form.value.description, 0).subscribe((data) => {
      this.apiService.cardChanged.next(data);
      this.form.reset();
    })
  }

}
